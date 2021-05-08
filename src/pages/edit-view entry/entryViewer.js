import '../entries/entry.css'
import Footer from "../../common/footer"
import React, {useRef} from 'react'
import {Grid, Paper, Typography, TextField, Button} from '@material-ui/core';
import CustomTable from "../../common/Table"
import { useHistory, useParams} from 'react-router-dom';
import {getBuild, updateBuild} from '../../services/builds.service';
import {getGuide, updateGuide} from '../../services/guides.services';
import {godsData} from '../../common/godsData';
import swal from 'sweetalert2'
const EntryViewer = (props) => {
    const handleGods = (data) => {
        if(count.current > 1 && disable){            
            setDisable(false);
        }
            setGods(data);
                
    }
    const handleItems = (data) => {
        if(count.current > 1 && disable){
            setDisable(false);
        } 
        setItems(data);
    }
    const {id}= useParams();
    const form = useRef();
    const count = useRef(0);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [gods, setGods] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [disable, setDisable] = React.useState(true);
    const [viewGods, setViewGods] = React.useState([]);
    const rating = useRef();
    let history = useHistory();

    React.useEffect(() => {
        if(props.edit){
            if(props.title === "build"){
                const GetBuild = async() => {
                    const response1 = await getBuild(id);
                    if(response1.status === 200){
                        setName(response1.data.build.title);
                        setDescription(response1.data.build.description);
                        const list = response1.data.build.gods;
                        const filter = godsData.filter((row) => list.includes(row.name));
                        rating.current = response1.data.build.rating;
                        setGods(filter.map(x => x.id));
                        
                    }else{
                        swal.fire({
                            toast:true,
                            position: 'bottom-end',
                            icon: 'error',
                            title: `status ${response1.status}:The item couldn't be found`,
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar:true
                        })
                       history.push("/latest-builds");
                    }
                }
                GetBuild();
            }else if(props.title === "guide"){
                const GetGuide = async() => {
                    const response1 = await getGuide(id);
                    if(response1.status === 200){
                        setName(response1.data.guide.title);
                        setDescription(response1.data.guide.description);
                        const list = response1.data.guide.gods;
                        const filter = godsData.filter((row) => list.includes(row.name));
                        rating.current = response1.data.guide.rating;
                        setGods(filter.map(x => x.id));                        
                    }else{
                        swal.fire({
                            toast:true,
                            position: 'bottom-end',
                            icon: 'error',
                            title: `status ${response1.status}:The item couldn't be found`,
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar:true
                        })
                       history.push("/latest-builds");
                    }
                }
                GetGuide();

            }
        }else{
            const getItem = async()=> {
                const response1 = await getBuild(id);
                const response2 = await getGuide(id);
                if(response1.status === 200){
                    setName(response1.data.build.title);
                    setDescription(response1.data.build.description);
                    const list = response1.data.build.gods;
                    const filter = godsData.filter((row) => list.includes(row.name));
                    setViewGods(filter);
                    
                }else if(response2.status === 200){
                    setName(response2.data.guide.title);    
                    setDescription(response2.data.guide.description);
                    const list = response2.data.guide.gods;
                    const filter = godsData.filter((row) => list.includes(row.name));
                    setViewGods(filter);
                }else{
                    swal.fire({
                        toast:true,
                        position: 'bottom-end',
                        icon: 'error',
                        title: `status ${response1.status}:The item couldn't be found`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar:true
                    })
                   history.push("/latest-builds");
                }
            }
            getItem();
        }

    },[history,id, props.edit, props.title]);
    const onSubmit =async(event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem("token")).username;        
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
        const New = {rating:rating.current,
        title: name,
        gods: godsData.filter((row) => gods.includes(row.id)).map(x => x.name),
        roles:godsData.filter((row) => gods.includes(row.id)).map(x => x.role),
        user: user,
        date:currentMonth + " " + currentDate + "," + currentyear}        
        if(props.title.includes("build")){         
         const response = await updateBuild(id,New);
         if(response.status === 204){
            swal.fire({
                toast:true,
                position: 'bottom-end',
                icon: 'success',
                title: `The Build has being edited`,
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
                title: `The Build could not be edited`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar:true
            })
           history.push("/latest-builds");
         }
        }else if(props.title.includes("guide")){
            const response = await updateGuide(id,New);
            if(response.status === 204){
               swal.fire({
                   toast:true,
                   position: 'bottom-end',
                   icon: 'success',
                   title: `The Guide has being edited`,
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
                    title: `The Guide could not be edited`,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar:true
                })
               history.push("/guide");
             }
        }       

    }    
    return (
        <div className="background-entry">            
            <Grid container direction="row" justify="center" className="title-space-entry">
                <Grid item>
                        <Typography variant="h5" style={{color: "#E1E1E1"}}>
                            {props.edit ? `Edit ${props.title}` :  `View Item`}
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
                                            <TextField value={name} name="name" onInput={e => {setName(e.target.value); if(disable){setDisable(false);}}} style={{color:"whitesmoke !important"}} fullWidth disabled={!props.edit} ></TextField>
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
                                            <TextField multiline rows = {3} rowsMax = {3} value={description} disabled={!props.edit} onInput={e => {setDescription(e.target.value); if(disable){setDisable(false);}}} name="description" style={{color:"whitesmoke !important"}} fullWidth></TextField>
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
                                    <CustomTable checkbox={props.edit} selected = {props.edit ? gods:[]} count = {props.edit?count:null}  parentCallBack = {handleGods} columns = {[
                                                    { field: 'name', headerName: 'Name', width:150},
                                                    { field: 'pantheon', headerName: 'Pantheon', width:132},
                                                    { field: 'role', headerName: 'Role',width:100},
                                                    { field: 'dmg', headerName:'Damage', width:130}]} rows = {props.edit? godsData: viewGods} height="200px" width="100%"/> 
                                    </Paper>
                    
                                </Grid>
                                {props.edit && <Grid item>
                                    <Grid container direction="row" justify="center">
                                        <Grid item style={{background:"white", borderRadius:"6px"}}>
                                            <Button  className="save-edit" type = "submit" variant="outlined" disabled={disable}><Typography variant="h5">Edit</Typography></Button>
                                        </Grid>                                    
                                    </Grid>                                
                                </Grid>}
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
                            <Paper elevation ={2} className="label-input"  style={{width:"95%"}}>
                                    <CustomTable checkbox={props.edit} selected = {props.edit ? items:[]} count = {props.edit?count:null} parentCallBack = {handleItems} columns = {[
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

export default EntryViewer;