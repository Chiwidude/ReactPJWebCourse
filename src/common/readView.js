/* eslint-disable no-undef */
import "./readView.css"
import React, {useState, useRef} from 'react';
import SearchBar from "material-ui-search-bar";
import {Grid, Button} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import ContentBox from "./box-container"
import Header from "./header"
import Footer from "./footer"
import TwitterContainer from "./TwitterFeed"
import swal from 'sweetalert2'
import { useHistory} from 'react-router-dom';
import {authorize} from "../services/auth.service";
const Template = (props) =>{
    const [searchValue, setValue] = useState();
    const [object, setObject] = useState(props.object);
    const button = useRef(); 
    const searched = (newvalue) => {          
        setValue(newvalue);
    }
    const canceled = () => {
        setObject(props.object);
    }
    const search = () => {
        const filtered = object.filter(x => x.title.includes(searchValue));
        setObject(filtered);
    }
   React.useEffect(() => {
       setObject(props.object);       
    }, [props.object])     
    let history = useHistory();
    const click = async (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).token;
        if(token === null){
            swal.fire({
                toast:true,
                position: 'bottom-end',
                icon: 'error',
                title: `You have to login to create an item`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar:true
              })
            history.push("/sign-in");   
        }else{
            const response = await authorize();
            if(response.status === 200){
                history.push(props.path);
            }else{
                history.push("/");
            } 
        }
        
    }
    return (
        <div className="background-view">
            <Header></Header>
            <Grid container direction="row" spacing={0} style={{marginTop:40+'px'}}>   
                <Grid item xs={12} sm={4}>
                <SearchBar className="searchBar-read"
                   
                    cancelOnEscape
                    value={searchValue}
                    onChange={searched}
                    onRequestSearch={search}
                    onCancelSearch ={canceled}
                     />                     
                </Grid>
                <Grid item xs={12} sm = {8}>
                    <Grid style={{marginTop:"5px", marginLeft:"5px"}} container direction="row">
                        <Grid item>
                            <Button className="create" onClick= {click} ref= {button}>Create</Button>
                        </Grid>
                    </Grid>                    
                </Grid>
            </Grid>
            <Grid container direction = "row" spacing = {0} style={{marginTop:40+'px', marginBottom:6.3+'%'}}>
                <Grid item xs = {12} sm = {8} container direction = "column" spacing = {5}>
                        {
                            object.map(({rating, title, gods, roles, user, date, _id, __v}) => (
                            <Grid item className="item-layout-read" key = {_id}>
                                <ContentBox
                                    rating={rating}
                                    title = {title}
                                    roles = {roles.join(",")}
                                    gods = {gods.join(",")}
                                    user = {user}
                                    lastdate = {date}
                                    id = {_id}
                                ></ContentBox>
                            </Grid>  ))}  
                            <Grid item>
                                <Pagination count={5} />
                            </Grid>                                       
                </Grid>
                <Grid item xs={12} sm = {4} style={{height: "auto"}}>
                            <TwitterContainer></TwitterContainer>
                </Grid>
            </Grid>                                    
            <Footer></Footer>
        </div>
    )
}

export default Template;