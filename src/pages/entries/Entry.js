import Header from "../../common/header"
import Footer from "../../common/footer"

import {Grid, Paper, Typography, TextField, Button} from '@material-ui/core';

const onSubmit =event => {
    event.preventDefault();
}
const Entry = (props) => {
    return (
        <div className="background">
            <Header />
            <Grid container direction="row" justify="center" style={{marginTop:40+"px"}}>
                <Grid item>
                        <Typography variant="h4" style={{color: "#E1E1E1"}}>
                            {props.title}
                        </Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing = {0} style={{marginTop:40+"px", marginBottom:91+"px"}}>
                <Grid item xs={12} sm={8}>
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
                                        <TextField name="name" style={{color:"whitesmoke !important"}} fullWidth ></TextField>
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
                                        <TextField multiline name="description" style={{color:"whitesmoke !important"}} fullWidth></TextField>
                                    </Grid>
                                </Grid>
                                </Paper>
                            </Grid>
                            <Grid item>
                            <Grid container direction="row" justify="center">
                                <Grid item>
                                    <Typography variant="h4" style={{color: "#E1E1E1"}}> Items</Typography>
                                </Grid>
                            </Grid>
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
                <Grid item xs={12} sm={4}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Grid container direction="row" justify="center">
                                <Grid item>
                                    <Typography variant="h4" style={{color: "#E1E1E1"}}> Gods</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>  
            </Grid>
            <Footer />
        </div>
    )
}

export default Entry;