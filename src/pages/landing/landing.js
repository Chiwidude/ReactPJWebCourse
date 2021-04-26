import React from 'react'
import './landing.css'
import Header from '../../common/header'
const Landing = () =>{
const object = [{
    rating:"4.5",
    title: "Sample Guide 1",
    gods: "Zeus",
    roles: "Solo, Jungle",
    user: "Chiwidude",
    date:"february 16, 2021",
    id:"1"
  },
  {
    rating:"4.9",
    title: "Sample Guide 2",
    gods: "Hun Batz, Susano",
    roles: "Solo, Jungle",
    user: "Masterchief117",
    date:"february 16, 2021",
    id:"2"
  },
  {
    rating:"4.7",
    title: "Best Supp Guide S8",
    gods: "",
    roles: "Support",
    user: "Chiwidude",
    date:"february 16, 2021",
    id:"3"
  },
  {
    rating:"4.8",
    title: "Xbalanque's best Guide S8",
    gods: "Xbalanque",
    roles: "ADC",
    user: "Saitama14",
    date:"february 16, 2021",
    id:"4"
  },
  {
    rating:"4.5",
    title: "Jungle Guide S8",
    gods: "",
    roles: "Jungle",
    user: "Peralta12",
    date:"february 16, 2021",
    id:"5"
  }]
  
  const object2 = [{
    rating:"4.5",
    title: "Sample Build 1",
    gods: "Zeus",
    roles: "Solo, Jungle",
    user: "Chiwidude",
    date:"february 16, 2021",
    id:"6"
  },
  {
    rating:"4.9",
    title: "Sample Build 2",
    gods: "Hun Batz, Susano",
    roles: "Solo, Jungle",
    user: "Masterchief117",
    date:"february 16, 2021",
    id:"7"
  },
  {
    rating:"4.7",
    title: "Best Supp Build S8",
    gods: "",
    roles: "Support",
    user: "Chiwidude",
    date:"february 16, 2021",
    id:"8"
  },
  {
    rating:"4.8",
    title: "Xbalanque's best Build S8",
    gods: "Xbalanque",
    roles: "ADC",
    user: "Saitama14",
    date:"february 16, 2021",
    id:"9"
  },
  {
    rating:"4.5",
    title: "Jungle Build S8",
    gods: "",
    roles: "Jungle",
    user: "Peralta12",
    date:"february 16, 2021",
    id:"10"
  }]
  
  localStorage.setItem("data", JSON.stringify(object))
  localStorage.setItem("data-builds", JSON.stringify(object2));    
        return (
            <div className="background-landing" >
                <Header isSigned= {false}>                                
                </Header>
                <div className="hero">
                    <div className="layout">
                        <h2>Gods And Goddesses</h2>                                      
                        <h1>Welcome to the battleground
                        of <span className="strong">the builds</span></h1>  
                    </div>                   
                                     
                </div>              
            </div>
        )
    
}

export default Landing;