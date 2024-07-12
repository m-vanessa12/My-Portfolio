import './hero.css';
import profile from '../img/profile png.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    return ( 
        <div className="hero-section">
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            <div className="introduction">
                <div className="greetings">Hi, I am</div>
                <div className="names">Vanessa Mukamanzi</div>
                <div className="title">UI/UX designer</div>
                <div className="other-roles">Front-End Developer/Graphic Designer</div>
                <div className="more">
                    <div className="my-resume">Resume</div>
                    <div className="hire-me">Hire-me</div>
                </div>
            </div>

            <div className="profile">
                <img src={profile} />
            </div>         
        </div>
     );
}
 
export default HeroSection;