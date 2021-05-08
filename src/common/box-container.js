import {Grid, Paper, Typography, IconButton, Tooltip} from '@material-ui/core'
import {makeStyles} from "@material-ui/core"
import LaunchIcon from '@material-ui/icons/Launch';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom'

const styles = makeStyles({
    paper:{
        background:`#335183`
    },
    rating:{
        padding:`2.8% !important`,
        background: `#C4C4C4`
    },
    content :{
        padding: `4px 3% !important`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `Capitalize`,
        color:  `#bfbfbf`
    },
    title:{
        color: `#F2E8E8`
    },
    txtRecon:{
        color: `#b7b7b7`
    },
    extraText: {
        color: `#161616`
    }
});
const ContentBox = (props) => {
    let history = useHistory();
    const onClick = (e) => {
        e.preventDefault();
        history.push(`/view/${props.id}`);
    }
    
    const classes = styles();
    
    return (
        <Paper elevation={2} className={classes.paper}>
            <Grid container spacing = {1}>
                <Grid item zeroMinWidth xs = {1} className={classes.rating}>
                    <Typography noWrap display="inline" variant="h6" style={{marginTop:15+ "%"}}>{props.rating}</Typography>
                </Grid>
                <Grid item xs = {6} container spacing = {0} direction = "column" className={classes.content} style={{width:58+"%"}}>
                        <Grid item>
                            <Typography variant="body1" className={classes.title}>
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" className={classes.extraText}>
                                Recommended Roles: <span className={classes.txtRecon}>{props.roles}</span> 
                            </Typography>
                            <Typography variant = "body2" className={classes.extraText}>
                                Recommended Gods: <span className={classes.txtRecon}>{props.gods}</span> 
                            </Typography>
                        </Grid>
                </Grid>
                <Grid item container xs = {4} spacing = {1} direction = "column">                    
                        <Grid item>
                            <Typography style={{fontSize:0.8+"rem"}} className={classes.extraText} align = "center" variant ="subtitle2">
                                Created By
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Link to="/" className={classes.linkText}><Typography align="center">{props.user}</Typography></Link>
                        </Grid>
                        <Grid item>
                            <Typography style={{fontSize:0.7+"rem"}} align = "center" variant = "body2" className={classes.extraText}>
                                Updated {props.lastdate}
                            </Typography>
                        </Grid>
                    
                </Grid>
                <Grid item xs = {1}>
                <Tooltip title="View Item" arrow> 
                    <IconButton onClick={onClick}><LaunchIcon style={{color:"whitesmoke"}}/></IconButton>
                </Tooltip>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ContentBox;