import React from 'react';
import Template from "../../common/readView"
const Guides = () =>{    
    const object = JSON.parse(localStorage.getItem("data"));
    return (
        <Template path="/create-guide" object = {object}></Template>        
    )
}

export default Guides;