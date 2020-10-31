import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faExternalLinkAlt,faCopy  } from '@fortawesome/free-solid-svg-icons'
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import './Contact.css'
import Menu from '../Menu/Menu';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('jahirulislam123', 'template_uljky3z', e.target, 'user_ghJwP4tUdOZtti1LfBmaz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
      }

    return (
       
       <>
        <Menu></Menu>
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3 mx-auto contact-heading" >
                    <h1 className="text-center text-white" >Contact <span style={{color:"#C82333"}}>Me</span> </h1>
                    
                    </div>
                </div>
            <div className="row">
                
                    <div className="col-8 offset-2">
                        
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                            
                                <input name='name' type="text" className="form-control" id="exampleFormControlInput1" required="true" placeholder="Full name"/>
                            </div>
                            <div className="form-group">
                            
                                <input name='email' type="email" className="form-control" id="exampleFormControlInput1" required="true" placeholder="Email address"/>
                            </div>
                            <div className="form-group">
                            
                                 <input name='subject' type="text" className="form-control" id="exampleFormControlInput1" required="true" placeholder="Subject"/>
                            </div>
                            <div className="form-group">
                            
                                 <textarea name='msg' type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" required="true" ></textarea>
                            </div>
                            <button type="submit" class="btn btn-danger "  style={{width: "100%"}}>Submit</button>
                        </form>
                    </div>
                    
            </div>
        </div>
            </section>
            </>
        
        
        
        
    );
};

export default Contact;