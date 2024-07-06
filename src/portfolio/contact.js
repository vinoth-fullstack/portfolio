import React, { useState } from 'react';
import axios from 'axios';
import cv from '../Vinoth Resume.pdf'

export default function Contact() {
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://6655cd493c1d3b60293b26de.mockapi.io/web_devloper/react_idm', formData);
            setMessage('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset the form

            setTimeout(() => {
                setMessage(''); // Clear the message after 10 seconds
            }, 10000);
        } catch (error) {
            setMessage('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="rows">
                    <div className="con-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p className="mail">
                            <i className="fa-solid fa-paper-plane"></i>
                            <a href="mailto:vinoth21062000@gmail.com">vinoth21062000@gmail.com</a>
                        </p>
                        <p className="phone">
                            <i className="fa-solid fa-phone"></i>
                            <a href="tel:+919791675326">+91 9791675326</a>
                        </p>
                        <div className="icons">
                            <a href="#c"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#a"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/vinoth21/" target='blank'><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/vinoth2106" target='blank'><i className="fa-brands fa-github"></i></a>
                        </div>
                        <a href={cv} download="Vinoth_Rajasekaran_CV.pdf">
              <button className="download-btn">Download CV</button>
            </a>
                    </div>
                    <div className="con-right">
                        <form onSubmit={handleSubmit}>
                          
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name}
                                required 
                                onChange={handleChange} 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                value={formData.email}
                                required 
                                onChange={handleChange} 
                            />
                            <textarea 
                                name="message" 
                                placeholder="Your Message" 
                                value={formData.message}
                                required 
                                onChange={handleChange} 
                            ></textarea>
                              {message && <p className="message">{message}</p>}
                            <button type="submit" className="download-btn btn2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>Copyright © 2024. Made by Vinoth</p>
            </div>
        </div>
    );
}
