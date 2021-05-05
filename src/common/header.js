import  React, {useEffect, useState, useRef} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import {AppBar, Toolbar, List, ListItem, ListItemText, Container} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import Logo from "../assets/icons8-smite.png"
import {authorize} from "../services/auth.service";
import swal from 'sweetalert2'
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

const link1 = [
    {title: `Latest Builds`, path:`/latest-builds`},
    {title: `Gods`, path:`/gods`},
    {title: `Guides`, path:`/guides`},
    {title: `Sign-In/Sign-Up`, path:`/sign-in`}    
]

const link2 = [
    {title: `Latest Builds`, path:`/latest-builds`},
    {title: `Gods`, path:`/gods`},
    {title: `Guides`, path:`/guides`},    
    {title: `profile`, path:`/profile`}
]


const Header = (props) => {
    let user = useRef();
    let history = useRef();
    let location = useRef();
    user.current = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).username;
    history.current = useHistory();
    location.current = useLocation();
    const[Links, setLinks] = useState(link1);
    const logOut = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        setLinks(link1);
        history.current.push("/");
    }
    
    useEffect(()=> {
        const auth = async () => {            
            const response = await authorize();            
            if(response.status === 200){
                setLinks(link2);
            }else if(response.status === 403){
                swal.fire({
                    toast:true,
                    position: 'bottom-end',
                    icon: 'error',
                    title: `Session has expired`,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar:true
                })
                localStorage.removeItem("token");
                user.current = null;
                history.current.push("/");            
            }else{                
                if(location.current.pathname === "/profile" || location.current.pathname === "/create-build" || location.current.pathname === "/create-guide" || 
                location.current.pathname === "/edit-profile" || location.current.pathname === "/profile"){
                    swal.fire({
                        toast:true,
                        position: 'bottom-end',
                        icon: 'error',
                        title: `You're not logged in`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar:true
                    })
                    history.current.push("/sign-in");

                }

            }    
        }
        auth();
        
    })    
    const classes = styles();
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Container maxWidth="lg" className={classes.navDisplay}>
                    <Link to="/" className={classes.link}>
                        <img src={Logo} alt="smite-logo"></img>                                                                                
                    </Link>                    
                    < List component="nav" aria-labelledby="main-navigation" className = {[classes.navDisplay, classes.container].join(' ')}>                        
                            {Links.map(
                                ({title, path}) => (
                                    <Link className={classes.linkText} key={title} to={path}>
                                        <ListItem button>
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    </Link>
                                ))}
                                {
                                    user.current !== null && <Link className = {classes.linkText} key="signout" to = "#">
                                          <ListItem button onClick={logOut}>
                                        <ListItemText className={classes.linkText} primary="sign out" />
                                        </ListItem> 
                                    </Link>
                                }
                    </List>                    
                </Container>
                
            </Toolbar>            
        </AppBar>
    )
}

export default Header