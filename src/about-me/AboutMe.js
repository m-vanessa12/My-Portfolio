import './about.css';
import profile from '../img/profile png.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return ( 
        <div className="about-me">

            <div className="about-title">About Me</div>
            <div className="about-subtitle">Get to know me better. There is all about me</div>
             
             <div className="about-info">

                <div className="about-profile">
                    <img src={profile} />
                </div>
                <div className="about-me-content">
                    <div className="my-names">Vanessa Mukamanzi</div>
                    <div className="about-descriptiom">
                        <div className='part1'>I am a UX/UI Designer with over two years of experience in user-centered design and front-end development. 
                            I hold a BSc in Computer Science from African Leadership University, specializing in 
                            creating intuitive, user-friendly interfaces. I aim to leverage my technical expertise and innovative approach to enhance digital interaction through work.</div>
                        
                        <div className='part2'>I am a public speaker, Youth Advocate from SOS Children's Village, YouthCan! Youth Advisory Board Member. I run an initiative called empower_youth_voices on Instagram 
                            which aim to raise awareness of youth participation because I believe in that youths voices matter and young people should be engaged
                            in activities that matters to their lives like decision making meetings etc.</div>
                    </div>
                    <div className="social-media">
                        <div className="my-socials">
                           <FontAwesomeIcon icon={faEnvelope} style={{ width: '30px', height: '35px', padding: '10px', color: '#FCA311'}} />
                        </div>
                        <div className="my-socials">
                           <FontAwesomeIcon icon={ faLinkedin} style={{ width: '30px', height: '32px', padding: '10px', color: '#FCA311'}} />
                        </div>
                        
                        <div className="my-socials">
                           <FontAwesomeIcon icon={ faInstagram} style={{ width: '30px', height: '32px', padding: '10px', color: '#FCA311'}} />
                        </div>

                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default AboutMe;