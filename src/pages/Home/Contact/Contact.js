import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <section id='contact' className='my-5'>
            <h2 align="center">Contact Me</h2>
            <div className="under-line-box">
                <div className="under-line">
                    <hr className="line" /><div className="round"></div>
                </div>
            </div>

            <Container>
                <h5 className='pb-4'>Let's get you connected with me. Hit the 'send' button to deliver your message or contact me using other social media platform. I am available 24/7 online.</h5>
                <div className="row">
                    <div className="col-md-5 d-flex align-items-center">
                        <img className="contact-image" src="https://imran-de.github.io/imran-ahmed/image/contact.png" alt="Contact" />
                    </div>
                    <div className="col-md-7 my-5">
                        <div className="contact">
                            <form id='reused_form' action='contact.php'>
                                <div className="input-box">
                                    <label htmlFor="Name">Name</label>
                                    <input type="text" name="name" placeholder="Name" required />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="email" placeholder="yourmail@domain.com" required />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="Message">Message</label>
                                    <textarea name="message" id="" rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <div className="text-center"><input className="link-button" type="submit" name="submit" value="SEND" /></div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;