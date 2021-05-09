import  React, {useEffect, useState, useRef} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu";
import {AppBar, Toolbar, List, ListItem, ListItemText, Container, IconButton, Drawer, MenuItem} from "@material-ui/core"
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


const Header = () => {
    let user = useRef();
    let history = useRef();
    let location = useRef();
    user.current = JSON.parse(localStorage.getItem("token")) === null ? null : JSON.parse(localStorage.getItem("token")).username;
    history.current = useHistory();
    location.current = useLocation();
    const[Links, setLinks] = useState(link1);
    const[view, setView] = useState({
        mobileView: false,
        drawerOpen: false
    });
    const { mobileView, drawerOpen } = view;
    const logOut = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        setLinks(link1);
        history.current.push("/");
    }
    
    useEffect(()=> {
        const setResponsiveness = () => {
            return window.innerWidth < 900
              ? setView((prevState) => ({ ...prevState, mobileView: true }))
              : setView((prevState) => ({ ...prevState, mobileView: false }));
          };
          setResponsiveness();
          window.addEventListener("resize", () => setResponsiveness());
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
        
    },[mobileView]);   
    const classes = styles();
    const DesktopView = ()=> {
        return (<Toolbar className={classes.toolbar}>
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
            
        </Toolbar>);
    }
    const MobileView = () => {
        const handleDrawerOpen = () => setView((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () => setView((prevState) => ({ ...prevState, drawerOpen: false }));
        const getDrawerChoices = () => {
            return (<div>
                {Links.map(
                            ({title, path}) => (
                                <Link  key={title} to={path}>
                                    <MenuItem className={classes.linkText}>{title}</MenuItem>
                                </Link>
                            ))}
                            {
                                user.current !== null && <Link key="signout" to = "#">
                                    <MenuItem onClick={logOut} className={classes.linkText}>{"sign out"}</MenuItem>
                                </Link>
                            }
            </div>)
        }
       return( 
       <Toolbar>
            <IconButton
            {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen
            }}
            >
            <MenuIcon />
            </IconButton>
            <Drawer {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}>
            {getDrawerChoices()}
            </Drawer>
            <div>
                <Link to="/" className={classes.link}>
                    <img src={Logo} alt="smite-logo"></img>                                                                                
                </Link> 
            </div>
        </Toolbar>);}
    return (
        <AppBar position="static" className={classes.appbar}>
           {mobileView? MobileView() : DesktopView()}
        </AppBar>
    )
}

export default Header