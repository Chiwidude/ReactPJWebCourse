import "./editProfile.css"
import Header from "../../common/header"
import Footer from "../../common/footer"
import {Grid, Paper, Typography, TextField, Button} from '@material-ui/core';
import profile from "../../assets/profile.png"

const onSubmit = (event) => {
    alert("sent");
    event.preventDefault();
}

const fileSelected = event => {
    alert(event.target.value)
    event.preventDefault();
}
const EditProfile = () => {
    return(
        <div className="background">
            <Header />
            <Grid container direction="row" justify="center" style={{marginTop:40+"px"}}>
                <Grid item>
                        <Typography variant="h4" style={{color: "#E1E1E1"}}>
                            Edit Profile
                        </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing = {0} style={{marginTop:40+"px", marginBottom:91+"px"}}>
                <Grid item xs={12} sm={6}>
                    <form onSubmit={onSubmit}>
                        <Grid container direction="column" spacing={3} wrap="wrap" style={{width:90+"%", marginLeft:"5%"}}>                           
                            <Grid item>
                                <Paper elevation={2} className="label-input">
                                <Grid container spacing={0}>                                    
                                    <Grid item style={{padding:"2% 0", background: "#C4C4C4"}} sm={2}>
                                        <Typography style={{paddingLeft: "5%"}} variant="body2">
                                            Name
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{padding:"1%"}} sm={10}>
                                        <TextField name="name" style={{color:"whitesmoke !important"}} fullWidth defaultValue="Francisco Alonzo"></TextField>
                                    </Grid>
                                </Grid>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper elevation={2} className="label-input">
                                <Grid container spacing={0}>                                    
                                    <Grid item style={{padding:"2% 0", background: "#C4C4C4"}} sm={2}>
                                        <Typography style={{paddingLeft: "5%"}} variant="body2">
                                            Username
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{padding:"1%"}} sm={10}>
                                        <TextField name="username" style={{color:"whitesmoke !important"}} fullWidth defaultValue="Chiwidude"></TextField>
                                    </Grid>
                                </Grid>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper elevation={2} className="label-input">
                                <Grid container spacing={0}>                                    
                                    <Grid item style={{padding:"2% 0", background: "#C4C4C4"}} sm={2}>
                                        <Typography  variant="body2">
                                            Description
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{padding:"1%"}} sm={10}>
                                        <TextField multiline name="description" style={{color:"whitesmoke !important"}} fullWidth defaultValue="Chiwidude"></TextField>
                                    </Grid>
                                </Grid>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper elevation={2} className="label-input">
                                <Grid container spacing={0}>                                    
                                    <Grid item style={{padding:"2% 0", background: "#C4C4C4"}} sm={2}>
                                        <Typography style={{paddingLeft: "5%"}} variant="body2">
                                            Email
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{padding:"1%"}} sm={10}>
                                        <TextField type="email" name="email" style={{color:"whitesmoke !important"}} fullWidth defaultValue="franalonzo96@gmail.com"></TextField>
                                    </Grid>
                                </Grid>
                                </Paper>
                            </Grid>
                            <Grid item >
                                <Button className="change-password" variant="outlined">Change Password</Button>
                            </Grid>

                            <Grid item>
                                <Grid container direction="row" justify="center">
                                    <Grid item style={{background:"white", borderRadius:"6px"}}>
                                        <Button  className="save-edit" type = "submit" variant="outlined"><Typography variant="h5">Save</Typography></Button>
                                    </Grid>                                    
                                </Grid>                                
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Grid container direction="row" justify="center">
                                <Grid item>
                                    <Typography variant="h4" style={{color: "#E1E1E1"}}> Profile Avatar</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <img className="edit-img" src={profile} alt="prof-img"></img>
                        </Grid>
                        <Grid item>
                        <input
                        accept="image/*"
                        style={{display:"none"}}
                        id="contained-button-file"
                        type="file"
                        onChange={fileSelected}
                        />
                        <label htmlFor="contained-button-file">
                            <Button component="span" className="upload-img" >Upload image</Button>
                        </label>                            
                        </Grid>

                    </Grid>
                </Grid>  
            </Grid>
            <Footer />
        </div>
    )
}

export default EditProfile