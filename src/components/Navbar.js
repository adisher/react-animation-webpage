import React, { useState, useRef, useEffect } from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Tabs, Tab, Drawer, ListItemText, List, ListItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import logo from '../images/logo.png'

import { Link as NavLink } from 'react-scroll'

const useStyles = makeStyles( (theme) => ({
    bgFixed: {
        backgroundColor: "#383b84",
        color: "mintcream",
        padding: "20px 0",
        transition: "0.5s ease",
        zIndex: 2000
    },
    bgScroll: {
        backgroundColor: "#243066",
        color: "mintcream",
        padding: "5px 0",
        transition: "0.5s ease",
        zIndex: 2000
    },
    tabLabel: {
        fontSize: "large",
        fontWeight: "bold",
        '&:hover': {
            color: 'white',
            opacity: 1,
        },
        [theme.breakpoints.down('sm')]: { display: 'none' }
    },
    appMenu: {
        [theme.breakpoints.up('md')]: { display: 'none' },
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "20px",
    },
    drawerPaper: {
        minWidth: '100%', 
        minHeight: '100%',
        backgroundColor: "#243066",
        color: "mintcream",
        overflow: "hidden",
        opacity: 0.8,
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },

}))
export default function Navbar() {
    const classes = useStyles()
    const [scroll, setScroll] = useState(false)
    // console.log("scroll", scroll)
    const navRef = useRef()
    navRef.current = scroll

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 1
            console.log("show", show)
            if(navRef.current !== show) {
                setScroll(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [open, setOpen] = useState(false)
    // console.log("console", open)
    const [tab, setTab] = useState(0)

    const handleChange = (event, tab) => {
        setTab(tab);
    };


    return (
        <>
            <AppBar className={scroll? classes.bgScroll : classes.bgFixed} 
                position="fixed" 
                elevation={0}
            >
                <Toolbar>
                    <img src={logo} alt="logo" style={{maxWidth: 200}} />
                    <Tabs 
                        value={tab} onChange={handleChange} 
                        TabIndicatorProps={{
                            style: {
                            height:"0px",
                            }
                        }}
                    >
                        <Tab label="Home" className={classes.tabLabel} /> 
      
                        <NavLink
                            to="bootcamp" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >
                            <Tab label="Bootcamp 2020" className={classes.tabLabel} />
                        </NavLink>
                        <NavLink
                            to="schedule" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >
                            <Tab label="Schedule" className={classes.tabLabel} />
                        </NavLink>
                    </Tabs>
                    <div style={{marginLeft: "auto"}}>
                        <IconButton className={classes.appMenu} onClick={() => setOpen(!open)} edge="end" color="inherit" aria-label="menu">
                            {open? <CancelIcon/> : <MenuIcon/> }
                        </IconButton>
                    </div>
                    <Drawer
                        variant="temporary"
                        open={open}
                        anchor="right"
                        elevation={0}
                        disableBackdropClick
                        disableScrollLock
                        onClose={() => setOpen(!open)}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <List>
                            {['Home', 'Services', 'Contact'].map((text, index) => (
                            <ListItem
                                button
                                key={text}
                                selected={tab === index}
                                onClick={(event) => handleChange(event, index)}
                            >
                                <ListItemText 
                                    primary={text} 
                                    primaryTypographyProps= {{ 
                                        style: {
                                            fontSize: "large",
                                            fontWeight: "bold",
                                        } 
                                    }} 
                                />
                            </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </>
    );
}
