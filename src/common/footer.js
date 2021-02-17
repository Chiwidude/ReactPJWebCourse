import * as React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, List, ListItem, ListItemText, Container, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import Icon from '@mdi/react';
import { mdiDiscord } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
const styles = makeStyles({
    navDisplay: {
        display: `flex`,
        "flex-direction":`row`,
        "align-items": `flex-start`,
        padding: `0px`,
        justifyContent: `space-between`,
        marginRight:"0"
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `#F2E8E8`
      },
      link: {
        textDecoration: `none`,
      },
      appbar: {
          background:`#B2B2B2`,
          boxShadow:`none`          
      },
      toolbar: {
          height:`64px`
      },
      container: {
          marginTop:`5px`
      }

});
const Links = [    
    {title: {mdiFacebook}, path:`/facebook`},
    {title: {mdiInstagram}, path:"https://www.instagram.com/smitegame/"},
    {title: {mdiTwitter}, path:"https://twitter.com/smitegame"},
    {title: {mdiDiscord}, path:"https://discord.com/invite/smite"},
]

const Footer = ()  => {
    const classes = styles()
    return(<AppBar position="static"className={classes.appbar}>
    <Toolbar>
    <Container maxWidth="md" className={classes.navDisplay}>
      
        <Typography variant="body1" style={{color:"#797979", marginTop:10+"px"}} align="center">
            Copyright © 2021 by smitebuilds. All rights Reservered
        </Typography>
        < List component="nav" aria-labelledby="footer-navigation" className = {classes.navDisplay} >                        
                                                            
                                    <Link className={classes.linkText} key={"facebook"} to={{ pathname:"https://www.facebook.com/smitegame/"}} target="_blank">
                                        <ListItem button>
                                        <Icon path={mdiFacebook} size={1} title={"Facebook"} color="black"/>
                                        </ListItem>
                                    </Link>
                                    <Link className={classes.linkText} key={"ig"} to={{ pathname:"https://www.instagram.com/smitegame/"}} target="_blank">
                                        <ListItem button>
                                        <Icon path={mdiInstagram} size={1} title={"Ig"} color="black"/>
                                        </ListItem>
                                    </Link>
                                    <Link className={classes.linkText} key={"twitter"} to={{ pathname:"https://twitter.com/smitegame"}} target="_blank">
                                        <ListItem button>
                                        <Icon path={mdiTwitter} size={1} title={"Twitter"} color="black"/>
                                        </ListItem>
                                    </Link>
                                    <Link className={classes.linkText} key={"discord"} to={{ pathname:"https://discord.com/invite/smite"}} target="_blank">
                                        <ListItem button>
                                        <Icon path={mdiDiscord} size={1} title={"Discord"} color="black"/>
                                        </ListItem>
                                    </Link>
                                
                    </List>    
    </Container>
    </Toolbar>
  </AppBar>)
}

export default Footer;