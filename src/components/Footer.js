import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

import search from '../images/search-engines-animate.svg'
import company from '../images/company-animate.svg'

import useWebAnimations, { pulse } from "@wellyshen/use-web-animations"



function Social() {
    return (
      <div style={{color:'mintcream'}}>
        <Link target="mynewtab" href="https://panacloud.github.io/bootcamp-2020">
            <GitHubIcon fontSize="large" style={{color:"mintcream"}} />
        </Link>
        <Link target="mynewtab" href="https://www.facebook.com/groups/piaic/">
            <FacebookIcon fontSize="large" style={{marginLeft: "100px", color:"mintcream"}} />
        </Link>
      </div>
    )
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      
      '--color-1': '#383b84',
      '--color-2': 'navy',
      background: `
        linear-gradient(
          to bottom,
          var(--color-1),
          var(--color-2) 80%
        )
      `,
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: '#243066',
      color: 'mintcream'
    },
  }));
  

export default function Footer() {
    const classes = useStyles()
    const { keyframes, timing } = pulse;
    const { ref: searchImg } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 1000, // Delay 1s
        duration: 3000,
        iterations: Infinity,
      },
    });
  return (
    <>
    <div className={classes.root}>
        <Container component="main" className={classes.main}>
            <Typography variant="h3" align='center' gutterBottom style={{color:"orange"}}>
                Start Learning
            </Typography>
            <Typography variant="h5" align='center' style={{marginBottom:'50px', color:"mintcream"}}>
                {'We have to understand humanity is facing a COVID-19 induced global economic recession and only the high-tech and software companies have grown and their stock prices and business have risen in this environment. '} 
                {'We need to immediately get ready to face the upcoming economic crises boldly.'}
            </Typography>
                <Grid item justify="center" align='center'>
                    <img loading="lazy" src={company} alt='company' style={{maxWidth:'250px', maxHeight:'250px'}} />
                    <img loading="lazy" ref={searchImg} src={search} alt='search' style={{maxWidth:'250px', maxHeight:'250px'}} />
                </Grid>
        </Container>
        <footer className={classes.footer}>
        <Container maxWidth="sm"> 
            <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
              <Social />
            </div>
        </Container>
        </footer>
    </div>
    </>
  );
}
