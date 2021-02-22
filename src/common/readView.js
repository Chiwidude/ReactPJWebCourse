import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";
import "./readView.css"
import {Grid} from '@material-ui/core'
import ContentBox from "./box-container"
import Header from "./header"
import Footer from "./footer"
import { TwitterTimelineEmbed } from "react-twitter-embed";
import TwitterContainer from "./TwitterFeed"
const Template = (props) =>{
    const [searchValue, setValue] = useState();
    const object = props.object
    return (
        <div className="background">
            <Header></Header>
            <Grid container direction="row" spacing={0} style={{marginTop:40+'px'}}>
                <Grid item xs={12} sm={4}>
                <SearchBar className="searchBar"
                    value={searchValue}
                    onChange={(newValue) => setValue(newValue)}
                     />
                </Grid>
                <Grid item xs={12} sm = {8}>

                </Grid>
            </Grid>
            <Grid container direction = "row" spacing = {0} style={{marginTop:40+'px', marginBottom:40+'px'}}>
                <Grid item xs = {12} sm = {8}>
                    <Grid container direction = "column" spacing = {5}>
                        {
                            object.map(({rating, title, gods, roles, user, date}) => (
                            <Grid item className="item-layout" key = {title}>
                                <ContentBox
                                    rating={rating}
                                    title = {title}
                                    roles = {roles}
                                    gods = {gods}
                                    user = {user}
                                    lastdate = {date}
                                ></ContentBox>
                            </Grid>  ))}                        
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