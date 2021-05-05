import {Grid, Paper, Typography, IconButton, Tooltip} from '@material-ui/core'
import {makeStyles} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import swal from 'sweetalert2';
import {deleteGuide} from "../services/guides.services";
import {deleteBuild} from "../services/builds.service";
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



const BoxList = (props) =>{  
    const Delete = (id, type) => {
        swal.fire({
            title:"Are you sure?",
            text: "Once deleted, you can't recover it",
            icon:"warning",
            buttons: true        
        }).then( async(value) => {
            if(value){
                if(type === "guide"){
                    const response = await deleteGuide(id);
                    if(response === 204){
                        swal.fire({
                            toast:true,
                            position: 'bottom-end',
                            icon: 'success',
                            title: `Guide deleted`,
                            showConfirmButton: false,
                            timer: 2500,
                            timerProgressBar:true
                        });
                        props.parentCallback();                        
                    }else if(response === 403){
                        props.parentCallback();
                    }
                }else if(type ==="build"){
                    const response = await deleteBuild(id);
                    if(response === 204){
                        swal.fire({
                            toast:true,
                            position: 'bottom-end',
                            icon: 'success',
                            title: `Build deleted`,
                            showConfirmButton: false,
                            timer: 2500,
                            timerProgressBar:true
                        });
                        props.parentCallback();  
                    }else if(response === 403){
                        props.parentCallback();  
                    }
                }
            }
        })
        
    }  
        const classes = styles();
        return (
        <Paper elevation={2} className={classes.paper}>
            <Grid container direction ="row">
                <Grid item sm={10}>
                    <Grid container  spacing = {1}>
                        <Grid item xs={12} className={classes.content} style={{width:58+"%"}}>
                            <Grid container spacing = {0} direction = "column">
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
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" style={{paddingTop: "8%"}}>
                        <Grid item> 
                        <Tooltip title="Edit">
                            <IconButton><EditIcon/></IconButton>
                        </Tooltip>                          
                                
                        </Grid>
                        <Grid item>
                            <Tooltip title="Delete">
                                <IconButton onClick= {() =>{Delete(props.id, props.type);}}><DeleteIcon/></IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>                    

        </Paper>)
}

export default BoxList;