import React, { useState } from 'react';
import profilePic from '../profile-pic.jpg';

export default function About() {
    const [activeTab, setActiveTab] = useState('Skills');

    return (
        <div className="about container" id="about">
            <div className="about-detail">
                <div className="about-img">
                    <img src={profilePic} alt="profile" />
                </div>
                <div className='left'>
                    <div className='title'>
                        <h2>About Me</h2>
                    </div>
                    <div className='about-me'>
                        <p>Dynamic MERN Stack Developer with a proven track record of designing and implementing innovative web appli-
                            cations. Proficient in crafting seamless user experiences with HTML, CSS, and JavaScript, leveraging the power of
                            ReactJs to build responsive and intuitive frontends. Adept at developing robust backend solutions using Node.js
                            and Express.js.Proficient in managing databases with MongoDB and skilled in version control using Git and GitHub.
                            Utilizes VS Code for efficient coding and development. Committed to creating responsive websites, enhancing user
                            experiences, and optimizing performance. Eager to learn and implement the latest technologies
                        </p>
                    </div>
                    <div className='titles'>
                        <p
                            className={`tab ${activeTab === 'Skills' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Skills')}
                        >
                            Skills
                        </p>
                        <p
                            className={`tab ${activeTab === 'Education' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Education')}
                        >
                            Education
                        </p>
                    </div>
                    <div className='contents'>
                        {activeTab === 'Skills' && (
                            <ul className='skills-list'>
                                <li><span>HTML</span></li>
                                <li><span>CSS</span></li>
                                <li><span>JAVASCRIPT</span></li>
                                <li><span>REACTJS</span></li>
                                <li><span>NODEJS</span></li>
                                <li><span>EXPRESSJS</span></li>
                                <li><span>MONGODB</span></li>
                            </ul>
                        )}
                        {activeTab === 'Education' && (
                            <div className="education-contents">
                                <ul>
                                    <li><span>2020-2024</span><br />B.Tech Information Technology<br /> Nandha College of Technology,Erode<br />CGPA 7.9</li>

                                    <li><span>2019-2020</span><br />HSC<br /> Green Park Matriculation Hr.Sec. School,Erode<br />Completed with 60.5%</li>

                                    <li><span>2017-2018</span><br />SSLC<br /> Sengunthar Vidhalaya Matric School,Erode<br />Completed with 85.6%</li>

                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}