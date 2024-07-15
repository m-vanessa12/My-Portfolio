
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from "./menu-bar/menuBar";
import HeroSection from './hero-section/heroSection';
import Portfolio from './portfolio/portfolio';
import GetInTouch from './contact-section/ContactMe';
import AboutMe from './about-me/AboutMe';
import Skills from './skills/MySkills';
import Projects from './projects/MyWork';
import Footer from './footer/PageFooter';
import Experience from './experience/Experience';

function App(){

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/" element={<MenuBar/>} />
        <Route path="/" element={<HeroSection/>} />
        <Route path="/" element={<GetInTouch/>} />
        <Route path="/" element={<AboutMe/>} />
        <Route path="/" element={<Skills/>} />
        <Route path="/" element={<Projects/>} />
        <Route path="/" element={<Footer/>} />
        <Route path="/" element={<Experience/>} />
        
      </Routes>
    </Router>

  );
}

export default App;