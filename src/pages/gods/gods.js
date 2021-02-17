import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";
import "./gods.css"
import {Grid, Paper, Typography} from '@material-ui/core'
import Header from "../../common/header"
import Footer from "../../common/footer"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      background: "#335183",
      width: "80%",
      margin: "0 5%",
      paddingTop: "15px"
    }
  }));

const GodsView = () => {
    const classes = useStyles();
    const Row = () => {
        return (
            <> 
                <React.Fragment>
                <Grid item xs={2}>
                <Paper className={classes.paper}>
                    <img src="https://www.smitefire.com/images/god/icon/xbalanque.png" alt="god"></img>
                    <Typography variant ="body2">
                        Xbalanque
                    </Typography>
                </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper}>
                    <img src="https://www.smitefire.com/images/god/icon/ra.png" alt="god"></img>
                    <Typography variant ="body2">
                        Ra
                    </Typography>
                </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper}>
                <img src="https://www.smitefire.com/images/god/icon/hun-batz.png" alt="god"></img>
                    <Typography variant ="body2">
                        Hun Batz
                    </Typography>                
                </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper}>
                <img src="https://www.smitefire.com/images/god/icon/apollo.png" alt="god"></img>
                    <Typography variant ="body2">
                        Apollo
                    </Typography>                
                </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper}>
                <img src="https://www.smitefire.com/images/god/icon/cu-chulainn.png" alt="god"></img>
                    <Typography variant ="body2">
                        Cu Chulainn
                    </Typography>                
                </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper}>
                <img src="https://www.smitefire.com/images/god/icon/bellona.png" alt="god"></img>
                    <Typography variant ="body2">
                        Bellona
                    </Typography>                
                </Paper>
                </Grid>                
            </React.Fragment>
            </>
        )
    }
    const [searchValue, setValue] = useState();
   return(<div className="background">
            <Header></Header>
            <Grid container direction="row" spacing={0} style={{marginTop:40+'px'}}>
                <Grid item xs={12} sm={4}>
                <SearchBar className="searchBar"
                    value={searchValue}
                    onChange={(newValue) => setValue(newValue)}
                     />
                </Grid>
                <Grid item xs={12} sm = {8}>
                </Grid>
            </Grid>
            <Grid container spacing = {2} style={{marginTop:40+'px', marginBottom:40+'px', paddingLeft:15+"px"}}>
                <Grid container item xs={12} spacing={2}>
                <Row />
                </Grid>
                <Grid container item xs={12} spacing={2}>
                <Row />
                </Grid>
                <Grid container item xs={12} spacing={2}>
                <Row />
                </Grid>
                <Grid container item xs={12} spacing={2}>
                <Row />
                </Grid>
            </Grid>
            <Footer />
        </div>)
}

export default GodsView;