import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
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
        <AppBar position="fixed" sx={{ bgcolor: "rgb(20, 20, 20)" }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
              <IconButton
                edge="start"
                href="#"
                sx={{ p: 0 }}
              >
                <Box
                  component="img"
                  src="/logo192.png"
                  alt="Logo"
                  sx={{ height: 40 }}
                />
              </IconButton>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Button color="inherit" href='#about' sx={{ "&:hover": { color: "primary.light"} }}>About</Button>
                <Button color="inherit" href='#projects' sx={{ "&:hover": { color: "primary.light"} }}>Projects</Button>
                <Button color="inherit" href='#skills' sx={{ "&:hover": { color: "primary.light"} }}>Skills</Button>
                <IconButton
                  href="https://github.com/cloud-ed"
                  target='_blank'
                  sx={{ p: 0 }}
                >
                  <Box
                    component="img"
                    src="/logo192.png"
                    alt="GitHub Profile"
                    sx={{ height: 40 }}
                  />
                </IconButton>
                <IconButton
                  href='https://www.linkedin.com/in/joshmilburn/'
                  target='_blank'
                  sx={{ p: 0 }}
                >
                  <Box
                    component="img"
                    src="/logo192.png"
                    alt="LinkedIn Profile"
                    sx={{ height: 40 }}
                  />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
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