import './menu.css';
import { HashLink as Link } from 'react-router-hash-link';

const MenuBar = () => {
    return ( 
        <div className="navigation-bar">

            <div className="logo">
                
                <h2>Vanessa</h2>
                <h1>. M</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to='#home' smooth><a href="#Home">Home</a></Link></li>
                    <li><Link to='#about' smooth><a href="#about">About</a></Link></li>
                    <li><Link to='#skills' smooth><a href="#skills">Skills</a></Link></li>
                    <li><Link to='#project' smooth><a href="#project">Project</a></Link></li>
                    <li><Link to='#experience' smooth><a href="#experience">Experience</a></Link></li>        
                    <li><Link to='#contact' smooth><a href="#contact">Contact</a></Link></li>
                    {/* <li> <a href="https://drive.google.com/file/d/1qM8Q4Zpn01gljaRhVR27ogXbmk-UBZ6L/view?usp=sharing/view?usp=sharing" target="_blank">
                        <button className='resume'>Resume</button>
                    </a> </li> */}

                </ul>
            </div>

        </div>
        
     );
}
 
export default MenuBar;