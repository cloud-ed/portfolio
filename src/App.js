import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Box, Container } from "@mui/material";

export default function App() {
  return (
    <main className="text-black bg-white body-font">
      <Container maxWidth="lg">
        <Navbar />
        <Box sx={{ pt: { xs: 7, sm: 8 } }}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Box>
      </Container>
    </main>
  );
}
