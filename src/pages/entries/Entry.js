import "./entry.css"
import Footer from "../../common/footer"
import React, {useRef} from 'react'
import {Grid, Paper, Typography, TextField, Button} from '@material-ui/core';

import CustomTable from "../../common/Table"
import { useHistory} from 'react-router-dom';
import {saveBuild} from '../../services/builds.service';
import {saveGuide} from '../../services/guides.services';
import {godsData} from '../../common/godsData';
import swal from 'sweetalert2'
const Entry = (props) => {
    const handleGods = (data) => {        
        setGods(data);
    }
    const handleItems = (data) => {
        setItems(data);
    }
    const form = useRef();
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [gods, setGods] = React.useState([]);
    const [items, setItems] = React.useState([]);
    let history = useHistory();
    const onSubmit =async(event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem("token")).username;        
        const rating = "0.0";
        const localDate = new Date();
        const months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
        ];
        
        let currentMonth = months[localDate.getMonth()];
        let currentDate = localDate.getDate();
        let currentyear = localDate.getFullYear();
        const New = {rating:rating,
        title: name,
        description: description,
        gods: godsData.filter((row) => gods.includes(row.id)).map(x => x.name),
        roles:godsData.filter((row) => gods.includes(row.id)).map(x => x.role),
        user: user,
        date:currentMonth + " " + currentDate + "," + currentyear}        
        if(props.title.includes("Build")){         
         const response = await saveBuild(New);
         if(response === 201){
            swal.fire({
                toast:true,
                position: 'bottom-end',
                icon: 'success',
                title: `The Build has being created`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar:true
            })
           history.push("/latest-builds");
         }else{
            swal.fire({
                toast:true,
                position: 'bottom-end',
                icon: 'error',
                title: `The Build could not be created`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar:true
            })
           history.push("/create-build");
         }
        }else if(props.title.includes("Guide")){
            const response = await saveGuide(New);
            if(response === 201){
               swal.fire({
                   toast:true,
                   position: 'bottom-end',
                   icon: 'success',
                   title: `The Guide has being created`,
                   showConfirmButton: false,
                   timer: 3000,
                   timerProgressBar:true
               })
              history.push("/guides");
            }else{
                swal.fire({
                    toast:true,
                    position: 'bottom-end',
                    icon: 'error',
                    title: `The Guide could not be created`,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar:true
                })
               history.push("/create-guide");
             }
        }        

    }    
    return (
        <div className="background-entry">                        
            <Grid container direction="row" justify="center" className="title-space-entry">
                <Grid item>
                        <Typography variant="h5" style={{color: "#E1E1E1"}}>
                            {props.title}
                        </Typography>
                </Grid>
            </Grid>
            <form onSubmit={onSubmit} ref={form}>
                <Grid container direction="row" spacing = {0} className="entry-space">
                    <Grid item xs={12} sm={6}>
                        
                            <Grid container direction="column" spacing={3} wrap="wrap" style={{width:90+"%", marginLeft:"5%"}}>                           
                                <Grid item>
                                    <Paper elevation={2} className="label-input">
                                    <Grid container spacing={0}>                                    
                                        <Grid item style={{padding:"2% 0", background: "#C4C4C4"}} sm={2}>
                                            <Typography style={{paddingLeft: "5%"}} variant="body2">
                                                Title
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{padding:"1%"}} sm={10}>
                                            <TextField value={name} name="name" onInput={e => setName(e.target.value)} style={{color:"whitesmoke !important"}} fullWidth required ></TextField>
                                        </Grid>
                                    </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Paper elevation={2} className="label-input">
                                    <Grid container spacing={0}>                                    
                                        <Grid item style={{padding:"2% 0", background: "#C4C4C4"}} sm={2}>
                                            <Typography style={{paddingLeft: "2%"}} variant="body2">
                                                Description
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{padding:"1%"}} sm={10}>
                                            <TextField multiline rows = {3} rowsMax = {3} value={description} onInput={e => setDescription(e.target.value)} name="description" style={{color:"whitesmoke !important"}} fullWidth></TextField>
                                        </Grid>
                                    </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" justify="center">
                                        <Grid item>
                                            <Typography variant="h6" style={{color: "#E1E1E1"}}> Gods</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Paper elevation ={2} className="label-input">
                                    <CustomTable checkbox = {true} count = {null}  parentCallBack = {handleGods} columns = {[
                                                    { field: 'name', headerName: 'Name', width:150},
                                                    { field: 'pantheon', headerName: 'Pantheon', width:132},
                                                    { field: 'role', headerName: 'Role',width:100},
                                                    { field: 'dmg', headerName:'Damage', width:130}]} rows = {godsData} height="200px" width="100%"/> 
                                    </Paper>
                    
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" justify="center">
                                        <Grid item style={{background:"white", borderRadius:"6px"}}>
                                            <Button  className="save-edit" type = "submit" variant="outlined"><Typography variant="h5">Save</Typography></Button>
                                        </Grid>                                    
                                    </Grid>                                
                                </Grid>
                            </Grid>                    
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Grid container direction="row" justify="center">
                                    <Grid item>
                                        <Typography variant="h6" style={{color: "#E1E1E1"}}> Items</Typography>
                                    </Grid>                                
                                </Grid>
                            </Grid>
                            <Grid item>
                            <Paper elevation ={2} className="label-input" style={{width:"95%"}}>
                                    <CustomTable checkbox = {true} count = {null} parentCallBack = {handleItems} columns = {[
                                                    { field: 'name', headerName: 'Name', width:150},
                                                    { field: 'cost', headerName: 'Cost', width:120}]} rows = {[
                                                    { id: 1, name: 'Animosity', cost: '1500' },
                                                    { id: 2, name: 'Asi', cost: '2550' }]} height="300px" width="100%"/> 
                                    </Paper>
                            </Grid>
                        </Grid>
                    </Grid>            
                </Grid>
            </form>
            <Footer />
        </div>
    )
}

export default Entry;