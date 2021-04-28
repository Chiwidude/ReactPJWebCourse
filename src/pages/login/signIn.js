import React, {useRef, useState} from "react";
import "./login.css"
import Logo from "../../assets/icon-smite-125.png" 
import {Grid, Paper, Button, TextField, Typography} from '@material-ui/core'
import {Link, useHistory} from 'react-router-dom'
import { mdiFacebook } from '@mdi/js';
import { mdiGoogle } from '@mdi/js';
import swal from 'sweetalert2'
import Icon from '@mdi/react';
import {login} from '../../services/auth.service';



const SignIn = () => {
    let history = useHistory();
    const form = useRef();    
    const [inputs, setInputs] = useState({
        email:"",
        password:""                
    });

    const Submit = async e =>{
        e.preventDefault();
        const status = await login(inputs.email, inputs.password);
        if(status === 400){
            history.push("/sign-up");
        }else if(status === 200){            
            swal.fire({
                toast:true,
                position: 'bottom-end',
                icon: 'success',
                title: `Welcome back!`,
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar:true
              })
            history.push("/");
        }
    }    
    
    const handleChange = e => {
        const value = e.target.value;
        setInputs({
            ...inputs, [e.target.name]:value
        })
    }
    return(
        <div className="background-login">            
            <Grid container direction="row" justify="center" spacing= {0} className="main-box">
                <Grid item xs={6}>
                    <Paper variant="elevation" elevation={2} className="paper" >
                            <Grid container direction="column" justify="center" spacing={2} style={{backgroundColor: "transparent"}}>
                                    <Grid item>                                                        
                                        <Grid container direction="column" justify="center" spacing={0} wrap="wrap">
                                            <Grid item >
                                               <Link to="/"> <img src={Logo} alt="smite-logo"></img></Link>
                                            </Grid>
                                            <Grid item>
                                                <h2>Gods and Goddesses</h2>
                                                <h1>welcome <span className="strong">Back</span></h1>
                                            </Grid>                                         
                                        </Grid> 
                                    </Grid>
                                    <Grid item style={{paddingBottom:0}}>
                                             <form onSubmit={Submit} ref={form}>
                                                <Grid container direction="column" spacing={2} wrap="wrap">
                                                    <Grid item >   
                                                        <TextField type = "email" placeholder="Email"
                                                        name="email" variant="outlined"      
                                                        required autoFocus className="input" size="small" margin="dense" onChange={handleChange} value={inputs.email} />                                                                                           
                                                    </Grid>
                                                    <Grid item>
                                                    <TextField type = "password" placeholder="Password"
                                                        name="password" variant="outlined"      
                                                        required className="input" size ="small" margin="dense" onChange={handleChange}  value={inputs.password}/>
                                                    </Grid>
                                                    <Grid item>
                                                        <Link to="/" className="link"><Typography className="text" variant="overline">Forgot your password</Typography></Link>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button className="button" variant ="contained" type="submit">LogIn</Button>
                                                        <Typography className="text" variant="overline" style={{marginInlineStart:"49%"}}>OR</Typography>
                                                    </Grid>
                                                </Grid>
                                            </form>                                            
                                    </Grid>
                                    <Grid item style={{paddingTop:0}}>
                                        <Grid container direction = "row" spacing = {0}>
                                            <Grid item xs={12} sm={6}>
                                                <Button className="facebook"
                                                startIcon = {<Icon path={mdiFacebook} size={1} title="facebook" color="#FFFFFF"/>} variant ="contained" >Facebook</Button>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Button className="google"
                                                startIcon = {<Icon path={mdiGoogle} size={1} title="facebook" color="#FFFFFF"/>} variant ="contained" >Google</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item style={{marginBottom:35+'px'}}>
                                    <Typography className="text" variant="overline" style={{marginInlineStart: 225+'px'}}>Not In Smite Builds? 
                                    <Link to="/sign-up" className="link"><Typography className="text" variant="overline" style={{marginInlineStart:5 + 'px'}}>Sign Up</Typography></Link></Typography>
                                    </Grid>

                            </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignIn;