import * as React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container} from "@material-ui/core"
import { Home } from "@material-ui/icons"
import {makeStyles} from "@material-ui/core"

const styles = makeStyles({
    navDisplay: {
        display: `flex`,
        "flex-direction":`row`,
        "align-items": `flex-start`,
        padding: `0px`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
      },
      appbar: {
          background:`transparent`,
          boxShadow:`none`
      }

});

const Links = [
    {title: `Latest Builds`, path:`/late-builds`},
    {title: `Gods`, path:`/gods`},
    {title: `Guides`, path:`/guides`},
    {title: `Sign-In/Sign-Up`, path:`/sign-in`},
    {title: `profile`, path:`/profile`}
]

const Header = () => {
    const classes = styles();
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Container maxWidth="lg" className={classes.navDisplay}>
                    <Link to="/" className={classes.linkText}>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <Home fontSize="large" />                                  
                        </IconButton>
                    </Link>

                    < List component="nav" aria-labelledby="main-navigation" className = {classes.navDisplay}>
                        {
                            Links.map(
                                ({title, path}) => (
                                    <Link className={classes.linkText} key={title} to={path}>
                                        <ListItem button>
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    </Link>
                                ))}
                    </List>
                </Container>
                
            </Toolbar>            
        </AppBar>
    )
}

export default Header