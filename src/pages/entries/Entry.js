import Header from "../../common/header"
import Footer from "../../common/footer"
import React from 'react'
import {Grid, Paper, Typography, TextField, Button} from '@material-ui/core';
import CustomTable,{selection} from "../../common/Table"
import { useHistory} from 'react-router-dom';
const Entry = (props) => {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    let history = useHistory();
    const onSubmit =event => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem("user-signed"));        
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

        var ID = function () {
            // Math.random should be unique because of its seeding algorithm.
            // Convert it to base 36 (numbers + letters), and grab the first 9 characters
            // after the decimal.
            return '_' + Math.random().toString(36).substr(2, 9);
          };
        const New = {rating:rating,
        title: name,
        gods: "",
        roles:"",
        user: user.user,
        date:currentMonth + " " + currentDate + "," + currentyear,
        id:ID}        
        if(props.title.includes("Build")){            
            let temp = JSON.parse(localStorage.getItem("data-builds"));
            temp.push(New);
            localStorage.setItem("data-builds", JSON.stringify(temp));
            history.push("/latest-builds");
        }else if(props.title.includes("Guide")){
            let temp = JSON.parse(localStorage.getItem("data"));
            temp.push(New);            
            localStorage.setItem("data", JSON.stringify(temp));
            history.push("/guides");
        }        

    }    
    return (
        <div className="background">
            <Header />
            <Grid container direction="row" justify="center" style={{marginTop:40+"px"}}>
                <Grid item>
                        <Typography variant="h5" style={{color: "#E1E1E1"}}>
                            {props.title}
                        </Typography>
                </Grid>
            </Grid>
            <form onSubmit={onSubmit}>
                <Grid container direction="row" spacing = {0} style={{marginTop:35+"px", marginBottom:10+"px"}}>
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
                                            <TextField value={name} name="name" onInput={e => setName(e.target.value)} style={{color:"whitesmoke !important"}} fullWidth ></TextField>
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
                                            <TextField multiline value={description} onInput={e => setDescription(e.target.value)} name="description" style={{color:"whitesmoke !important"}} fullWidth></TextField>
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
                                    <CustomTable columns = {[
                                                    { field: 'name', headerName: 'Name', width:150},
                                                    { field: 'pantheon', headerName: 'Pantheon', width:132},
                                                    { field: 'role', headerName: 'Role',width:100},
                                                    { field: 'dmg', headerName:'Damage', width:130}]} rows = {[
                                                    { id: 1, name: 'Zeus', pantheon: 'Greek', role: "Mage", dmg:"Magical" },
                                                    { id: 2, name: 'Hun Batz', pantheon: 'Mayan', role: "Assasin", dmg:"Physical" }]} height="200px" width="100%"/> 
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
                                    <CustomTable columns = {[
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