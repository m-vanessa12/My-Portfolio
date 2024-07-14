import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faMapMarker} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetInTouch = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, process.env.REACT_APP_USER_ID);
        console.log("Service ID:", process.env.REACT_APP_SERVICE_ID);
        console.log("Template ID:", process.env.REACT_APP_TEMPLATE_ID);
        console.log("Public Key:", process.env.REACT_APP_USER_ID);

    
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        )
        
        .then(
            (result) => {
                toast.success('Message Sent!'); 
                form.current.reset(); 
                
            },
            (error) => {
                console.error('Email send failed:', error);
                toast.error('Failed to send email. Please try again later.');
            }
            
        );
    };




    return ( 
        <div className="my-contact" id='contact'>
            <ToastContainer />
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

                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="inputs-field">
                        <input type="text" name="user_name" id="" placeholder='Full Names'/>
                    </div>
                    <div className="inputs-field">
                        <input type="text" name="user_email" id="" placeholder='Email'/>
                    </div>
                    <div className="inputs-field">
                        <textarea name="message" id="" placeholder='Message'></textarea>
                    </div>
                    <div className="inputs-submit">
                        <input type="submit" name='submit' value={'Send Message'} className='btn'/>
                    </div>
                </form>



            </div>          
        </div>
     );
}
 
export default GetInTouch;