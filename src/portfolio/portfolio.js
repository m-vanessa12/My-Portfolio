
import MenuBar from "../menu-bar/menuBar";
import HeroSection from "../hero-section/heroSection";
import GetInTouch from "../contact-section/ContactMe";
import AboutMe from "../about-me/AboutMe";
import Skills from "../skills/MySkills";
import Projects from "../projects/MyWork";
import Footer from "../footer/PageFooter";


const Portfolio = () => {
    return ( 
        <div className="my-portfolio">
            <MenuBar />
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projects />
            <GetInTouch />
            <Footer />
            
        </div>
     );
}
 
export default Portfolio;