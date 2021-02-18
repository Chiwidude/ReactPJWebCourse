import Header from "../../common/header"
import Footer from "../../common/footer"
import {Grid, Paper, Typography, IconButton, Tooltip} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import "./profile.css"
import profile from "../../assets/profile.png"
import {Link} from "react-router-dom"

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
                <Grid containerspacing = {0} style={{marginTop:40+"px", marginBottom:25 +"px"}}>
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
                    <Grid item xs={6}>

                    </Grid>
                </Grid>
            <Footer></Footer>
        </div>
    )
}

export default Profile;