import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import diabites_predictor from '../img/diabete_predictor.png';
import house from '../img/house_keeping.png';
import mentorship from '../img/mentor_me.png';
import '../projects/work.css';


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

            {/* <div className="work-display">

                <div className="work-description">
                    <div className="project-titles">Diabetes Prediction App</div>
                    <div className="project-subtitle">UX/UI Project</div>
                    <div className="description">The Diabetes Predictor App, this in app that uses machine learning to analyze health metrics 
                        like blood glucose levels, BMI, age, and family history, providing early warnings and personalized 
                        insights to help users manage their health and prevent diabetes</div>
                        <div className="features">
                            <span className='feature-title'>Features:</span>
                            <span className='features-list'>Diabetes Predictor</span>
                        </div>
                    <div className="moree">
                        <a href="https://www.figma.com/design/ZaEr0r1mSkKfyyhERdZGc0/Diabetes-Predictor?node-id=0-1&t=ZSw9DWYY6NVdnnaO-0" target='_blank'>
                        <span>Full project</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} style={{ width: '18px', height: '25px', color: '#FFF', marginLeft : '15px', marginTop: '5px'}} />
                        </a>
                        </div>
                  </div>  

                <div className="work-done2">
                    <img src={diabites_predictor} alt="house keeping app" />
                </div>        

            </div> */}


            <div className="work-display">
                <div className="work-done">
                    <img src={mentorship} alt="Mentor.Me platform" />
                </div>
                <div className="work-description2">
                    <div className="project-titles">StepUp.Her Platform</div>
                    <div className="project-subtitle">UX/UI Project</div>
                    <div className="description">StepUp.Her platform, is a Women-to-Women mentorship platform aims to connect young from university and successful Women
                        holding different roles in different fields. These young women are women who are being prepared for transitioning from university life to professional life. 
                    </div>
                        <div className="features">
                            <span className='feature-title'>Features:</span>
                            <span className='features-list'> Discussion Forum, Mentorship, Resources, Profiles</span>
                        </div>
                    <div className="moree">
                        <a href="https://www.figma.com/proto/DXljKUM0VLfwCAYqsDtvWQ/Mentorship-Platform?node-id=123-1446&t=Bh7zgPRLSzmDFWrX-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" target='_blank'>
                        <span>Full project</span>
                        <FontAwesomeIcon icon={faExternalLinkAlt} style={{ width: '18px', height: '25px', color: '#FFF', marginLeft : '28px', marginTop: '2px'}} />
                        </a>
                        </div>
                  </div>          

            </div>

        </div>
     );
}
 
export default Projects;