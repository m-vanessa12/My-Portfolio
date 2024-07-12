import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faMapMarker} from '@fortawesome/free-solid-svg-icons';

const GetInTouch = () => {
    return ( 
        <div className="my-contact">
            <div className="contact-title">Contact</div>
            <div className="contact-content">Want to work together or you got any idea to develop your dream? 
            contact me by filling out the form.  I will get back to you ASAP</div>

            <div className="contact-info">
                <div className="contact-info1">

                    <div className="contact-details">
                      <FontAwesomeIcon icon={faEnvelope} style={{ width: '30px', height: '35px', padding: '10px', color: '#FCA311'}} />
                      <div className="my-email">mukavanessa@gmail.com</div>
                    </div>
                    <div className="contact-details">
                      <FontAwesomeIcon icon={faPhone} style={{ width: '30px', height: '35px', padding: '10px', color: '#FCA311'}} />
                      <div className="my-email">+250780705984</div>
                    </div>
                    <div className="contact-details">
                      <FontAwesomeIcon icon={faMapMarker} style={{ width: '30px', height: '35px', padding: '10px', color: '#FCA311'}} />
                      <div className="my-email">Kigali Rwanda, KG 8 Ave 17</div>
                    </div>

                </div>

                <div className="contact-form">
                    <div className="inputs-field">
                        <input type="text" name="Names" id="" placeholder='Full Names'/>
                    </div>
                    <div className="inputs-field">
                        <input type="text" name="Names" id="" placeholder='Email'/>
                    </div>
                    <div className="inputs-field">
                        <textarea name="" id="" placeholder='Message'></textarea>
                    </div>
                    <div className="inputs-submit">
                        <input type="submit" name='submit' value={'Send Message'} className='btn'/>
                    </div>
                </div>



            </div>          
        </div>
     );
}
 
export default GetInTouch;