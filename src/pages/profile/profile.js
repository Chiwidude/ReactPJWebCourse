import "./profile.css"
import Header from "../../common/header"
import Footer from "../../common/footer"
import BoxList from "../../common/box-list"
import {Grid, Paper, Typography, IconButton, Tooltip} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import profile from "../../assets/profile.png"
import {Link} from "react-router-dom"

let arr1 = JSON.parse(localStorage.getItem("data"))
let arr2 = JSON.parse(localStorage.getItem("data"))

arr1 = arr1.filter(item => item.user === "Chiwidude");
arr2 = arr2.filter(item => item.user === "Chiwidude")

let arry = arr1.concat(arr2)

const array = [];
const map = new Map();

for(const item of arry){
    if(!map.has(item.title)){
        map.set(item.title, true);
        array.push(item)
    }
}

const Profile = ()  => {
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
                <Grid container direction="row" spacing = {0} style={{marginTop:40+"px", marginBottom:42 +"px"}}>
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
                                            <Link to="/edit-profile">
                                                <Tooltip title="Edit user data" arrow>                                                
                                                    <IconButton style={{color: "#E1E1E1"}}><EditIcon /></IconButton>
                                                </Tooltip>
                                            </Link>                                            
                                            </Typography>                                  
                                    </Paper>
                                
                            </Grid>
                            <Paper style={{backgroundColor:"#d0d0d0",margin:"0 5%", width:90+"%"}} elevation = {2}>
                                <Grid item>                                
                                    <Typography variant= "h6" style={{color: "#8c8c8c", margin:"0 5%", paddingTop:"2px"}}> Username:<span style={{color:"#7b7b7b"}}>Chiwidude</span></Typography>                               
                                </Grid>
                            </Paper>

                            <Paper style={{backgroundColor:"#d0d0d0",margin:"1% 5%", width:90+"%"}} elevation = {2}>
                                <Grid item>
                                   <Typography variant="h6" style={{color: "#8c8c8c", margin:"0 5%", paddingTop:"2px"}}>
                                       Description:
                                       </Typography>
                                       <Typography variant="body2" style={{color:"#7b7b7b", margin:"0 5%", paddingTop:"2px"}} paragraph align="justify">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra, ante a hendrerit porta, libero nunc lacinia ante, et aliquam sem ex cursus ex. Pellentesque orci nunc, mattis vitae justo volutpat, euismod consequat tellus. Mauris quis fermentum tortor. In eu mi ante. Quisque consequat, nunc sed varius luctus, dui purus.
                                       </Typography>
                                </Grid>
                            </Paper>
                        </Grid>                        
                    </Grid>
                    <Grid item xs={6} className="scroll-list">
                        <Grid container direction="row" justify = "center" style={{marginTop:40+"px"}}>
                            <Grid item>
                                <Typography variant="h5" style={{color: "#E1E1E1"}}>
                                User Entries
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing = {0} className="list-container">
                            {
                                array.map(({rating, title, gods, roles, user, date}) => (
                                    <Grid item className="item-layout" key = {title}>
                                        <BoxList                                            
                                            title = {title}
                                            roles = {roles}
                                            gods = {gods}
                                        ></BoxList>
                                    </Grid>  ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            <Footer></Footer>
        </div>
    )
}

export default Profile;