import { HashLink as Link } from 'react-router-hash-link';
import './hero.css';
import profile from '../img/profile png.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    return ( 
        <div className="hero-section" id='home'>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            <div className="introduction">
                <div className="greetings">Hi, I am</div>
                <div className="names">Vanessa Mukamanzi</div>
                <div className="title">UI/UX designer</div>
                <div className="other-roles">Front-End Developer/Graphic Designer</div>
                <div className="more">
                    
                    <a href="https://drive.google.com/file/d/1qM8Q4Zpn01gljaRhVR27ogXbmk-UBZ6L/view?usp=sharing/view?usp=sharing" target="_blank">
                       <div className="my-resume">Resume</div>
                    </a>

                    <Link to="#contact" smooth className="hire-me">
                        Hire-me
                    </Link>

                    
                </div>
            </div>

            <div className="profile">
                <img src={profile} />
            </div>         
        </div>
     );
}
 
export default HeroSection;