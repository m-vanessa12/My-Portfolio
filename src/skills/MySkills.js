import '../skills/skills.css';
import illustrator from '../img/illustrator.png';
import photoshop from '../img/photoshop.png';
import canva from '../img/canva.jpeg';
import figma from '../img/figma.png';
import css from '../img/css.png';
import html from '../img/html.png';
import react from '../img/react.png';
import tailwind from '../img/tailwind.png'
import wordpress from '../img/wordpress.png'

const Skills = () => {
    return ( 
        <div className="skills-section" id='skills'>
            <div className="skills-title">Services and Technologies</div>
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

                <div className="cards">
                    <div className="tool">
                        <img src={figma} alt="Figma logo" />
                    </div>
                    <div className="tool-name">Figma</div>
                </div>
                <div className="cards">
                    <div className="tool">
                        <img src={html} alt="html logo" />
                    </div>
                    <div className="tool-name">HTML</div>
                </div>

                <div className="cards">
                    <div className="tool">
                        <img src={css} alt="css logo" />
                    </div>
                    <div className="tool-name">css</div>
                </div>

                <div className="cards">
                    <div className="tool">
                        <img src={react} alt="react logo" />
                    </div>
                    <div className="tool-name">ReactJs</div>
                </div>
                <div className="cards">
                    <div className="tool">
                        <img src={tailwind} alt="tailwind logo" />
                    </div>
                    <div className="tool-name">TailWind css</div>
                </div>
                <div className="cards">
                    <div className="tool">
                        <img src={wordpress} alt="tailwind logo" />
                    </div>
                    <div className="tool-name">WordPress</div>
                </div>

            </div>

        </div>
     );
}
 
export default Skills;