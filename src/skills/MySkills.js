import '../skills/skills.css';
import illustrator from '../img/illustrator.png';
import photoshop from '../img/photoshop.png';
import canva from '../img/canva.jpeg';

const Skills = () => {
    return ( 
        <div className="skills-section">
            <div className="skills-title">Services</div>
            <div className="skills-subtitle"> I am a UX/UI designer, a graphic designer and a front-end developer looking for a job. 
                available for doing remote  or in-person opportunities. .</div>

            <div className="tools-set">

                <div className="cards">
                    <div className="tool">
                        <img src={illustrator} alt="Adobe illustrator logo" />
                    </div>
                    <div className="tool-name">Adobe Illustrator</div>
                </div>
                <div className="cards">
                    <div className="tool">
                        <img src={illustrator} alt="Adobe illustrator logo" />
                    </div>
                    <div className="tool-name">Adobe Illustrator</div>
                </div>

                <div className="cards">
                    <div className="tool">
                    <img src={photoshop} alt="Adobe Photoshop logo" />
                    </div>
                    <div className="tool-name">Adobe Photoshop</div>
                </div>
                <div className="cards">
                    <div className="tool">
                    <img src={canva} alt="canva logo" />
                    </div>
                    <div className="tool-name">Canva</div>
                </div>

            </div>

        </div>
     );
}
 
export default Skills;