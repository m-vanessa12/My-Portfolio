import './menu.css';
import { HashLink as Link } from 'react-router-hash-link';
import React, { useState } from 'react';

const MenuBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toogleMenu = ()=>{
        setMenuOpen(!menuOpen);
    };

    return ( 
        <div className="navigation-bar">

            <div className="logo">
                
                <h2>Vanessa</h2>
                <h1>. M</h1>
            </div>

            <div className="menu-icon" onClick={toogleMenu}>
                {menuOpen ? <i className='fas fa-times'></i> : <i className='fas fa-bars' ></i>}
            </div>
            <div className={`menu ${menuOpen ? 'show' : ''}`}>
                
                <ul>
                    <li><Link to='#home' smooth onClick={() => setMenuOpen(false)}><a href="#Home">Home</a></Link></li>
                    <li><Link to='#about' smooth onClick={() => setMenuOpen(false)}><a href="#about">About</a></Link></li>
                    <li><Link to='#skills' smooth onClick={() => setMenuOpen(false)}><a href="#skills">Skills</a></Link></li>
                    <li><Link to='#project' smooth onClick={() => setMenuOpen(false)}><a href="#project">Project</a></Link></li>
                    <li><Link to='#experience' smooth onClick={() => setMenuOpen(false)}><a href="#experience">Experience</a></Link></li>        
                    <li><Link to='#contact' smooth onClick={() => setMenuOpen(false)}><a href="#contact">Contact</a></Link></li>
                    {/* <li> <a href="https://drive.google.com/file/d/1qM8Q4Zpn01gljaRhVR27ogXbmk-UBZ6L/view?usp=sharing/view?usp=sharing" target="_blank">
                        <button className='resume'>Resume</button>
                    </a> </li> */}

                </ul>
                
                
            </div>

        </div>
        
     );
}
 
export default MenuBar;