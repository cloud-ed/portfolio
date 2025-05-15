import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Container } from '@mui/material';

export default function ButtonAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="fixed" sx={{ bgcolor: "rgb(35, 47, 78)" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Josh Milburn
              </Typography>
              <Button color="inherit" onClick={topFunction}>About</Button>
              <Button color="inherit" href='#projects'>Projects</Button>
              <Button color="inherit" href='#skills'>Skills</Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="github"
                href='https://github.com/cloud-ed'
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="linkedin"
                href='https://www.linkedin.com/in/joshmilburn/'
              >
                <LinkedInIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Box sx={{ flexGrow: 1 }}>
      </Box>
    </React.Fragment>
  );
}

// Function to scroll to the top of the page
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, etc.
}

// Function to hide the navbar on scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}