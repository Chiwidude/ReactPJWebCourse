import React, {useState} from "react";
import "./editProfile.css"
import Header from "../../common/header"
import Footer from "../../common/footer"
import {Grid, Paper, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import profile from "../../assets/profile.png"
import {useHistory} from "react-router-dom";
import {userData, updateUser} from '../../services/auth.service';
import swal from 'sweetalert2'
const EditProfile = () => {
    let history = useHistory();
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const [inputs, setInputs] = useState({
        name:"",
        username:"",
        email:"",
        description:""
    });
    React.useEffect(() => {
        const getUser = async () =>{
            const id = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).id;
            if(id !== null){
                const response = await userData(id);
                if(response.status === 200){
                    setUser(response.data.user); 
                    setInputs({name:response.data.user.name, username:response.data.user.username, description: response.data.user.description, email: response.data.user.email});
                }else{
                    history.push("/");
                }
            }

        }
        getUser();
    },[history]);
    const onSubmit = async (event) => {
        event.preventDefault();
        const id = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).id;
        const response = await updateUser(id, inputs);
        if(response.status === 204){
            swal.fire({
                toast:true,
                position: 'bottom-end',
                icon: 'success',
                title: `status ${response.status}:Your information has been updated.`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar:true
            })           
            history.push("/profile");
        }else{
            swal.fire({
                toast:true,
                position: 'bottom-end',
                icon: 'error',
                title: `status ${response.status}:something unexpected happened, try again.`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar:true
            })
        }        
    }    
    const handleChange = e => {
        const value = e.target.value;
        setInputs({
            ...inputs, [e.target.name]:value
        })
    }

        
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
            <Grid container direction="row" spacing = {0} className="gridSpaceEdit-profile">
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
                                        <TextField name="name" style={{color:"whitesmoke !important"}} fullWidth onChange={handleChange} value={inputs.name}></TextField>
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
                                        <TextField name="username" style={{color:"whitesmoke !important"}} fullWidth onChange={handleChange} value={inputs.username}></TextField>
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
                                        <TextField multiline name="description" style={{color:"whitesmoke !important"}} fullWidth onChange={handleChange} value={inputs.description}></TextField>
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
                                        <TextField type="email" name="email" style={{color:"whitesmoke !important"}} fullWidth onChange={handleChange} value={inputs.email}></TextField>
                                    </Grid>
                                </Grid>
                                </Paper>
                            </Grid>
                            <Grid item >
                                <Button className="change-password" onClick={handleClickOpen} variant="outlined">Change Password</Button>
                                <Dialog open={open} onClose={handleClose} aria-labelledby="form-change-password">
                                    <DialogTitle id="form-change-password">Change Password</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            You can change your password here
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </Dialog>
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
                      {/*   <Grid item>
                        <input
                        name="img"
                        accept="image/*"
                        style={{display:"none"}}
                        id="contained-button-file"
                        type="file"
                        onChange={handleChange}
                        />
                        <label htmlFor="contained-button-file">
                            <Button component="span" className="upload-img" >Upload image</Button>
                        </label>                            
                        </Grid>*/}

                    </Grid>
                </Grid>  
            </Grid>
            <Footer />
        </div>
    )
}

export default EditProfile