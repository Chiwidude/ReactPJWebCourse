import React from 'react';
import "./profile.css"
import Header from "../../common/header"
import Footer from "../../common/footer"
import BoxList from "../../common/box-list"
import {Grid, Paper, Typography, IconButton, Tooltip, Menu, MenuItem} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import profile from "../../assets/profile.png"
import {Link} from "react-router-dom";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {userData} from '../../services/auth.service';
import {getBuilds} from '../../services/builds.service';
import {getGuides} from '../../services/guides.services';
import { useHistory} from 'react-router-dom';




const Profile = ()  => {        
    let history = useHistory();
    const [arrayBuilds, setArrayBuilds] = React.useState([]);
    const [arrayGuides, setArrayGuides] = React.useState([]);
    const [anchorEl,setAnchorEl] = React.useState(null);
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
        const getUser = async () =>{
            const id = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).id;
            if(id !== null){
                const response = await userData(id);
                const response2 = await getBuilds();
                const response3 = await getGuides();                       
                if(response.status === 200 && response2.status === 200 && response3.status===200){
                    setUser(response.data.user);
                    setArrayBuilds(response2.data.builds);
                    setArrayGuides(response3.data.guides);
                }else{
                    history.push("/");
                }
            }

        }
        getUser();
    },[history]);    
    arrayBuilds.forEach(item => item.type = "build");
    arrayGuides.forEach(item => item.type = "guide");
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
      };
    const handleClose = () => {
        setAnchorEl(null)
      };


    let arry = arrayBuilds.concat(arrayGuides);

    const array = [];
    const map = new Map();

    for(const item of arry){
        if(!map.has(item._id)){
        map.set(item._id, true);
        array.push(item)
        }
    }     
    return (
        <div className="background">
            <Header></Header>
                <Grid container direction="row" justify = "center" style={{marginTop:40+"px"}}>
                    <Grid item>
                        <Typography variant="h4" style={{color: "#E1E1E1"}}>
                            Account User Settings
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing = {0}  style={{paddingTop:40+"px", marginBottom:19.5 +"%"}}>
                    <Grid item xs = {6}>
                        <Grid container direction="column" spacing = {2} wrap="wrap">
                            <Grid item style={{height:150+"px"}}>
                                <Grid container direction="row" justify = "center" spacing = {1}>
                                <Grid item>
                                        <img className="profile-img" src={profile} alt="prof-img"></img>
                                    </Grid>                                  
                                </Grid>
                            </Grid>
                            <Grid item style={{margin:"0 5%", width:90+"%"}}>                               
                                    <Paper style={{backgroundColor:"#335183"}} elevation = {1}>
                                            <Typography variant="h6" style={{color: "#E1E1E1", margin:"0 5%", paddingTop:"2px"}}>
                                            User Data
                                            
                                                <Tooltip title="Edit user data" arrow>
                                                <Link to="/edit-profile">                                              
                                                    <IconButton style={{color: "#E1E1E1"}}><EditIcon /></IconButton> </Link>
                                                </Tooltip>
                                                                                  
                                            </Typography>                                  
                                    </Paper>
                                
                            </Grid>
                            <Paper style={{backgroundColor:"#d0d0d0",margin:"0 5%", width:90+"%"}} elevation = {2}>
                                <Grid item>                                
                                    <Typography variant= "h6" style={{color: "#8c8c8c", margin:"0 5%", paddingTop:"2px"}}> Username:<span style={{color:"#7b7b7b"}}>{user.username}</span></Typography>                               
                                </Grid>
                            </Paper>

                            <Paper style={{backgroundColor:"#d0d0d0",margin:"1% 5%", width:90+"%"}} elevation = {2}>
                                <Grid item>
                                   <Typography variant="h6" style={{color: "#8c8c8c", margin:"0 5%", paddingTop:"2px"}}>
                                       Description:
                                       </Typography>
                                       <Typography variant="body2" style={{color:"#7b7b7b", margin:"0 5%", paddingTop:"2px"}} paragraph align="justify">
                                        {user.description}                                        
                                       </Typography>
                                </Grid>
                            </Paper>
                        </Grid>                        
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Grid container direction="row" justify = "center" style={{marginTop:40+"px"}}>
                                    <Grid item>
                                        <Typography variant="h5" style={{color: "#E1E1E1"}}>
                                        User Entries 
                                        <Tooltip title="create entry" arrow> 
                                            <IconButton onClick={handleClick}><AddCircleIcon style={{color:"whitesmoke"}}/></IconButton>
                                        </Tooltip>
                                            <Menu anchorEl={anchorEl} open = {Boolean(anchorEl)} onClose={handleClose} keepMounted id="create-menu"> 
                                                <MenuItem onClick={handleClose}><Link to="/create-build" className="LinkText">Create Build</Link></MenuItem>
                                                <MenuItem onClick={handleClose}><Link to="/create-guide" className="LinkText">Create Guide</Link></MenuItem>
                                            </Menu>
                                        </Typography>                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item className="scroll-list">
                                <Grid container spacing = {0} className="list-container">
                                {
                                    array.map(({rating, title, gods, roles, user, date, _id, type, __v}) => (
                                        <Grid item className="item-layout" key = {_id}>
                                            <BoxList                                            
                                                title = {title}
                                                roles = {roles.join(",")}
                                                gods = {gods.join(",")}
                                                id= {_id}
                                                type = {type}
                                            ></BoxList>
                                        </Grid>  ))
                                }
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            <Footer></Footer>
        </div>
    )
}

export default Profile;