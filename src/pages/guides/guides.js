import {useState, useEffect} from 'react';
import {getAll} from "../../services/guides.services";
import React from 'react';
import Template from "../../common/readView"
const Guides = () =>{    
    const[object, setObject] = useState([]);
    useEffect(()=> {
        const getBuilds = async () => {
          const response =  await getAll();          
          setObject(response.guides);                    
        }
        getBuilds();        
    },[]);
    return (
        <Template path="/create-guide" object = {object}></Template>        
    )
}

export default Guides;