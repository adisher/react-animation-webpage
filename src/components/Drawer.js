import React, { useState } from 'react'
import { Drawer, ListItemText, IconButton, List, ListItem, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles( (theme) => ({
    
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

export default function Drawers() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [tab, setTab] = useState(0)

    const handleChange = (event, tab) => {
        setTab(tab);
    };

    return (
        <>
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
        </>
    )
}