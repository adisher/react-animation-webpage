import React from 'react';
import { Grid, CardMedia, Typography, Container, Link } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'

import astronaut from '../images/astronaut-animate.svg'
import telecom from '../images/telecommuting-animate.svg'

import TimerIcon from '@material-ui/icons/Timer'
import TimerOffIcon from '@material-ui/icons/TimerOff'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'

import Particles from 'react-particles-js'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Grids() {
  return (
    <Container>
        {/* 1 */}
        <div style={{position:"relative"}}>
            <div style={{position:"absolute", minWidth:"100%", minHeight:"100%"}}>
                <Particles 
                    params={{ 
                        particles: { 
                            number: { 
                            value: 50, 
                            density: { 
                                enable: true, 
                                value_area: 1000, 
                            } 
                            }, 
                        }, 
                    }} 
                /> 
            </div>
            <Grid 
                id="bootcamp" 
                container 
                justify="space-between" 
                alignItems="center" 
                spacing={5} 
                style=
                    {{
                        marginBottom: "200px",
                        position:'relative',
                        zIndex:'1'
                    }}
            >
                <Grid item xs={4} md={4}>
                    <CardMedia
                        component="img"
                        image={astronaut}
                        alt="astronaut"
                        style={{maxHeight: "450px", maxWidth: "450px"}}
                    />
                </Grid>
                <Grid item xs={8} md={8}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h4" style={{paddingBottom: "30px", color: "orange"}}>
                            Bootcamp 2020
                        </Typography>
                        <Typography variant="h6" style={{color: "mintcream"}}>
                            Free Online Learn to Earn Fast track Bootcamp to Learn Freelancing and do Remote Work in the COVID-19 Economic Environment
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </div>
        {/* 2 */}
        <div style={{position:"relative"}}>
            <div style={{position:"absolute", minWidth:"100%", minHeight:"100%"}}>
                <Particles 
                    params={{ 
                        particles: { 
                            number: { 
                            value: 50, 
                            density: { 
                                enable: true, 
                                value_area: 1000, 
                            } 
                            }, 
                        }, 
                    }} 
                /> 
            </div>
            <Grid 
                id="schedule" 
                container 
                alignItems="center" 
                spacing={4} 
                style=
                    {{
                        position:'relative', 
                        zIndex: '1', 
                        marginBottom: "200px"
                    }}
            >
                <Grid item xs={6} md={8}>
                    <Grid container justify="space-around" spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h5" style={{paddingBottom: "20px", color: "orange"}}>
                                English Section
                            </Typography>
                            <Typography variant="subtitle2" style={{display: "flex", alignItems: "center", paddingBottom: "15px", color: "mintcream"}}>
                                <EventAvailableIcon style={{marginRight: "5px"}}/> Every Saturday and Tuesday 
                            </Typography>
                            <Typography variant="subtitle2" style={{display: "flex", paddingBottom: "15px", color: "mintcream"}}>
                                <TimerIcon/> 10:00 PM  <TimerOffIcon style={{marginLeft: "15px"}}/> 11:15 PM
                            </Typography>
                            <Typography variant="subtitle2" style={{marginLeft: "4px", color:"mintcream", display:"flex", justifyContent:"flex-start"}}>
                                Live at
                                <Link target="mynewtab" href="https://www.facebook.com/groups/4irug">
                                    <FacebookIcon fontSize="large" style={{marginLeft: "10px", color:"mintcream"}} />
                                </Link>
                                <Link target="mynewtab" href="https://www.youtube.com/channel/UCZUgRzBPk8CoYeHhbPL8OWg">
                                    <YouTubeIcon fontSize="large" style={{marginLeft: "10px", color:"mintcream"}} />
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h5" style={{paddingBottom: "20px", color: "orange"}}>
                                Urdu Section
                            </Typography>
                            <Typography variant="subtitle2" style={{display: "flex", alignItems: "center", paddingBottom: "15px", color: "mintcream"}}>
                                <EventAvailableIcon style={{marginRight: "5px"}}/> Every Sunday and Wednesday 
                            </Typography>
                            <Typography variant="subtitle2" style={{display: "flex", paddingBottom: "15px", color: "mintcream"}}>
                                <TimerIcon/> 10:00 PM <TimerOffIcon style={{marginLeft: "15px"}}/> 11:15 PM
                            </Typography>
                            <Typography variant="subtitle2" style={{marginLeft: "4px", color:"mintcream", display:"flex", justifyContent:"flex-start"}}>
                                Live at
                                <Link target="mynewtab" href="https://www.facebook.com/groups/freelance.remote.work">
                                    <FacebookIcon fontSize="large" style={{marginLeft: "10px", color:"mintcream"}} />
                                </Link>
                                <Link target="mynewtab" href="https://www.youtube.com/channel/UCfAX44elSfBV66jU53akpBA">
                                    <YouTubeIcon fontSize="large" style={{marginLeft: "10px", color:"mintcream"}} />
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardMedia
                        component="img"
                        image={telecom}
                        alt="telecom"
                        style={{maxheight: "450px", maxWidth: "450px"}}
                    />
                </Grid>
            </Grid>
        </div>
    </Container>
  );
}
