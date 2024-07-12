import './menu.css';

const MenuBar = () => {
    return ( 
        <div className="navigation-bar">

            <div className="logo">
                <h2>Vanessa</h2>
                <h1>. M</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="#Experience">Experience</a></li>        
                    <li><a href="#Contact">Contact</a></li>
                    <button className='resume'>Resume</button>
                </ul>
            </div>

        </div>
        
     );
}
 
export default MenuBar;