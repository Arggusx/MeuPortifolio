import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./pages/Home";
import Portiflio from "./pages/Portofolio";
import WelcomeScreen from "./pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/Navbar";
import AnimatedBackground from "./components/Background";


const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
      {showWelcome && (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)}  />
      )}
      </AnimatePresence>
      
      {!showWelcome && (
        <>
          <NavBar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portiflio />
          <Contact />
          <footer>
            <center>
              <hr className='my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center'/>
              <span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
                © 2025{" "}
                <a href="https://flowbite.com/" className="hover:cursor-pointer">
                  Douglas
                </a>
                . Todos os direitos reservados.
              </span>
            </center>
          </footer> 
        </>
      )}
    </>
  )
};

const ProjectPageLayout = () => {
  return (
    <>
      <ProjectDetails />
      <footer>
        <center>
          <hr className='my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center'/>
          <span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Douglas
            </a>
            . Todos os direitos reservados.
          </span>
        </center>
      </footer>   
    </>
  )
}
function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
