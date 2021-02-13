import * as React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, List, ListItem, ListItemText, Container} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import Logo from "../assets/icons8-smite.png"
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
        color: `#F2E8E8`
      },
      link: {
        textDecoration: `none`,
      },
      appbar: {
          background:`transparent`,
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
    {title: `Latest Builds`, path:`/late-builds`},
    {title: `Gods`, path:`/gods`},
    {title: `Guides`, path:`/guides`},
    {title: `Sign-In/Sign-Up`, path:`/sign-in`},
    /*{title: `profile`, path:`/profile`}*/
]

const Header = () => {
    const classes = styles();
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Container maxWidth="lg" className={classes.navDisplay}>
                    <Link to="/" className={classes.link}>
                        <img src={Logo} alt="smite-logo"></img>                                                                                
                    </Link>

                    < List component="nav" aria-labelledby="main-navigation" className = {[classes.navDisplay, classes.container].join(' ')}>
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