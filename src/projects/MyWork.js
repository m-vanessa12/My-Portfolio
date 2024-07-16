import '../projects/work.css';
import house from '../img/house_keeping.png';
import diabites_predictor from '../img/diabete_predictor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
    return ( 
        <div className="project" id='project'>
            <div className="work-title">Portfolio</div>
            <div className="work-subtitle">Get to access my latest project</div>
            <div className="about-line"></div>

            <div className="work-display">
                <div className="work-done">
                    <img src={house} alt="house keeping app" />
                </div>
                <div className="work-description">
                    <div className="project-titles">House Keeping App</div>
                    <div className="project-subtitle">UX/UI Project</div>
                    <div className="description">The Housekeeping and Laundry Booking App is a user-friendly platform that simplifies booking professional 
                        housekeeping and laundry services, whether for one-time deep cleaning, regular house maintenance, or laundry needs.</div>
                        <div className="features">
                            <span className='feature-title'>Features:</span>
                            <span className='features-list'>Laundry Booking, House Keeping Services</span>
                        </div>
                    <div className="moree">
                        <a href="https://www.figma.com/design/JIPhgo8UnCWpUhNlJAwTWp/House-Keeping-Application?node-id=0-1&t=A6XpDzmiNMEfbFJl-0" target='_blank'>
                        <span>Full project</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} style={{ width: '18px', height: '25px', color: '#FFF', marginLeft : '15px', marginTop: '5px'}} />
                        </a>
                        </div>
                  </div>          

            </div>

            <div className="work-display">

                <div className="work-description">
                    <div className="project-titles">House Keeping App</div>
                    <div className="project-subtitle">UX/UI Project</div>
                    <div className="description">The Housekeeping and Laundry Booking App is a user-friendly platform that simplifies booking professional 
                        housekeeping and laundry services, whether for one-time deep cleaning, regular house maintenance, or laundry needs.</div>
                        <div className="features">
                            <span className='feature-title'>Features:</span>
                            <span className='features-list'>Laundry Booking, House Keeping Services</span>
                        </div>
                    <div className="moree">
                        <a href="https://www.figma.com/design/JIPhgo8UnCWpUhNlJAwTWp/House-Keeping-Application?node-id=0-1&t=A6XpDzmiNMEfbFJl-0" target='_blank'>
                        <span>Full project</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} style={{ width: '18px', height: '25px', color: '#FFF', marginLeft : '15px', marginTop: '5px'}} />
                        </a>
                        </div>
                  </div>  

                <div className="work-done2">
                    <img src={diabites_predictor} alt="house keeping app" />
                </div>        

            </div>

        </div>
     );
}
 
export default Projects;