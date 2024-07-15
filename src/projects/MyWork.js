import '../projects/work.css';
import house from '../img/house.png';
import diabetes  from '../img/diabetes1.png';


const Projects = () => {
    return ( 
        <div className="project" id='project'>
            <div className="work-title">Portfolio</div>
            <div className="work-subtitle">Get to access my latest project</div>
            <div className="work-display">
                <div className="work-done">
                    <div className="project-image-container">
                        <img src={house} alt='House keeping UI/UX app' className='project-image'/>
                    </div>
                    <div className="project-name">House Keeping App</div>
                    <div className="project-class">UI/UX</div>
                </div>

                <div className="work-done">
                   <div className="project-image-container">
                        <img src={house} alt='House keeping UI/UX app' className='project-image'/>
                    </div>
                    <div className="project-name">House Keeping App</div>
                    <div className="project-class">UI/UX</div>

                </div>

                <div className="work-done">
                   <div className="project-image-container">
                        <img src={diabetes} alt='Diabetes prediction UI/UX app' className='project-image'/>
                    </div>
                    <div className="project-name">Diabetes Prediction App</div>
                    <div className="project-class">UI/UX</div>

                </div>

            </div>
        </div>
     );
}
 
export default Projects;