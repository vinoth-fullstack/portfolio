import React, { useState } from 'react';
import Work1 from '../images/work1.png';
import Work2 from '../images/work2.png';
import Work3 from '../images/work3.png';
import Work4 from '../images/work4.png';
import Work5 from '../images/work5.png';
import Work6 from '../images/work6.png';
import Work7 from '../images/work7.png'
import Work8 from '../images/Work8.png';

export default function Portfolio() {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="portfolio" id='portfolio'>
            <div className="container">
                <h1 className="sub-titles">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={Work1} alt='work1' />
                        <div className='layer'>
                            <h3>Blog Website</h3>
                            <p>Visit the blog built with HTML, CSS, and JavaScript, where I share insights on web development, showcase projects to enhance your skills. Explore now to dive into the world of coding and creativity.</p>
                            <a href='https://vinothreactproject.netlify.app' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={Work2} alt='work2' />
                        <div className='layer'>
                            <h3>E-commerce Website</h3>
                            <p>Discover my eCommerce site powered by ReactJS and CSS, where I showcase cutting-edge design, seamless user experiences, and robust functionality. Explore now for insights into modern web development and eCommerce solutions."</p>
                            <a href='https://bazars.netlify.app' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={Work3} alt='work3' />
                        <div className='layer'>
                            <h3>Weather Tracker</h3>
                            <p>Explore my weather checking application, powered by React and CSS with MockAPI integration for reliable weather reports. Stay informed with accurate forecasts and essential weather data at your convenience.</p>
                            <a href='https://vinoth-weather-report.netlify.app' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    {showMore && (
                        <>
                            <div className="work">
                                <img src={Work4} alt='work4' />
                                <div className='layer'>
                                    <h3>Budget Planner</h3>
                                    <p>Check out my Budget Planner, developed to help you manage your finances efficiently. With easy-to-use features and intuitive design, you can track your expenses, set savings goals, and gain control over your budget effortlessly</p>
                                    <a href='https://react-expenses-app-byvinoth.netlify.app' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                            <div className="work">
                                <img src={Work5} alt='work5' />
                                <div className='layer'>
                                    <h3>MiniStore</h3>
                                    <p>Explore my MiniStore website, featuring a sleek and responsive frontend built with HTML, CSS, and JavaScript. Experience a user-friendly interface designed to enhance your online shopping journey</p>
                                    <a href='https://vinothfrontendproject.netlify.app' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                            <div className="work">
                                <img src={Work6} alt='work6' />
                                <div className='layer'>
                                    <h3>Countdown Timer</h3>
                                    <p>Discover my Countdown Timer application, built with JavaScript and CSS, designed to help you track time for any event. Set your countdowns and stay on schedule with this easy-to-use timer</p>
                                    <a href='https://countdown-in-js-by-vinoth.netlify.app/' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                            <div className="work" id="work7">
                                <img src={Work7} alt='work7' />
                               <div className='layer'>
                                    <h3>Myntra</h3>
                                    <p>Check out my Myntra duplicate website, crafted with Node.js, Express, and CSS. Experience a full-fledged online store with dynamic features, seamless navigation, and a stylish design.</p>
                                    <a href='https://myntra-app.netlify.app/' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                            <div className="work">
                                <img src={Work8} alt='work8' />
                                <div className='layer'>
                                    <h3>Calculator</h3>
                                    <p>Explore my Calculator application, built using JavaScript and CSS. Perform quick and accurate calculations with a clean and intuitive interface</p>
                                    <a href='https://calculator-using-javascript-css.netlify.app/' target='blank'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="see-more-container">
                    <button onClick={handleShowMore} className="see-more-button">
                        {showMore ? 'Show Less' : 'See More'}
                    </button>
                </div>
            </div>
        </div>
    );
}

