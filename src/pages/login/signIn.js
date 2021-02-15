import "./login.css"
import Logo from "../../assets/icon-smite-125.png" 
import {Grid, Paper, Button, TextField, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { mdiFacebook } from '@mdi/js';
import { mdiGoogle } from '@mdi/js';
import Icon from '@mdi/react';



const Submit = ()=>{
    //alert("submited");
}

const SignIn = () => {
    return(
        <div className="background-login">            
            <Grid container direction="row" justify="center" spacing= {0} className="main-box">
                <Grid item xs={6}>
                    <Paper variant="elevation" elevation={2} className="paper" >
                            <Grid container direction="column" justify="center" spacing={2} style={{backgroundColor: "transparent"}}>
                                    <Grid item>                                                        
                                        <Grid container direction="column" justify="center" spacing={0} wrap="wrap">
                                            <Grid item >
                                                <img src={Logo} alt="smite-logo"></img>
                                            </Grid>
                                            <Grid item>
                                                <h2>Gods and Goddesses</h2>
                                                <h1>welcome <span className="strong">Back</span></h1>
                                            </Grid>                                         
                                        </Grid> 
                                    </Grid>
                                    <Grid item style={{paddingBottom:0}}>
                                             <form onSubmit={Submit()}>
                                                <Grid container direction="column" spacing={2} wrap="wrap">
                                                    <Grid item >   
                                                        <TextField type = "email" placeholder="Email"
                                                        name="username" variant="outlined"      
                                                        required autoFocus className="input" size="small" margin="dense" />                                                                                           
                                                    </Grid>
                                                    <Grid item>
                                                    <TextField type = "password" placeholder="Password"
                                                        name="password" variant="outlined"      
                                                        required className="input" size ="small" margin="dense" />
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
                                                startIcon = {<Icon path={mdiFacebook} size={1} title="facebook" color="#FFFFFF"/>} variant ="contained" type="submit">Facebook</Button>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Button className="google"
                                                startIcon = {<Icon path={mdiGoogle} size={1} title="facebook" color="#FFFFFF"/>} variant ="contained" type="submit">Google</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item style={{marginBottom:20+'px'}}>
                                    <Typography className="text" variant="overline" style={{marginInlineStart: 225+'px'}}>Not In Smite Builds? 
                                    <Link to="/" className="link"><Typography className="text" variant="overline" style={{marginInlineStart:5 + 'px'}}>Sign Up</Typography></Link></Typography>
                                    </Grid>

                            </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignIn;