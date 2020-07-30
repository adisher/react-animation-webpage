import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'
import Typed from 'react-typed';
import useWebAnimations, { fadeInRight } from "@wellyshen/use-web-animations"

import Navbar from './Navbar'; //component

import welcome from '../images/welcome-animate.svg'
// import '../components/shape.css'

import Particles from 'react-particles-js'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Header() {
    const { ref: headImg } = useWebAnimations({ ...fadeInRight });
    
    return (
    <>
        <Navbar/>
        <div style={{position:"relative"}}>
            <div style={{position:"absolute", minWidth:"100%", minHeight:"100%"}}>
                <Particles 
                    params={{ 
                        particles: { 
                            number: { 
                            value: 30, 
                            density: { 
                                enable: true, 
                                value_area: 1000, 
                            } 
                            }, 
                        }, 
                    }} 
                /> 
            </div>
            <Grid id="Intro" container justify="space-between" alignItems="center" style={{position:'relative', zIndex:'1', margin: "10px 0 200px"}}>
                <Grid item xs={7} md={8}>
                <ThemeProvider theme={theme}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="left" style={{paddingBottom: "0.5rem", color: "orange"}}>
                            We Train
                        </Typography>
                        <Typography variant="h5" align="center" style={{paddingBottom: "0.5rem", color: "mintcream"}}>
                            <Typed
                            strings={[
                                'React',
                                'Gatsby.js',
                                'Redux', 
                                'QraphQL', 
                                'Node.js/Express', 
                                'MongoDB', 
                                'Git, GitHub, GitHub Actions', 
                                'Terraform', 
                                'Google Cloud Run', 
                                'AWS EC2', 
                                'Contentful', 
                                'Stripe', 
                                'SnipCart', 'Shopify',
                                'WAAPI']}
                                typeSpeed={100}
                                backSpeed={50}
                                smooth
                                loop >
                            </Typed>
                        </Typography>
                        <Typography variant="h2" align="right" style={{color: "orange"}}>
                            You Code
                        </Typography>
                    </Container>
                </ThemeProvider>
                </Grid>

                <Grid item xs={5} md={4}>
                    <img
                        loading="lazy"
                        ref={headImg}
                        src={welcome}
                        alt="welcome"
                        style={{maxHeight: "500px", maxWidth: "500px"}}
                    />
                </Grid>
            </Grid>
        </div>
    </>
  );
}
