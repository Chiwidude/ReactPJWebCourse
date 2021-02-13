import React, {Component} from 'react'
import '../pages/landing.css'
import Header from '../common/header'
class Landing extends Component {
    render(){
        return (
            <div className="background" >
                <Header>                                
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
}

export default Landing;