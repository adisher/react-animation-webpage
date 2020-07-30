import React, { useState, useRef, useEffect } from 'react';
import { makeStyles, AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'

import logo from '../images/logo.png'

import Drawers from './Drawer.js' 

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
                    <img src={logo} alt="logo" style={{maxWidth: 200}} loading="lazy"/>
                    <Tabs 
                        value={tab} onChange={handleChange}
                        TabIndicatorProps={{
                            style: {
                            height: 0,
                            }
                        }}
                        style={{margin: 'auto'}}
                    >
                        <NavLink
                            to="Intro" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >
                            <Tab label="Introduction" className={classes.tabLabel} />
                        </NavLink>
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
                    
                    <Drawers />
                </Toolbar>
            </AppBar>
        </>
    );
}
