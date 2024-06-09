// About.js

import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="display-5 text-success">Welcome to ASK Coaching</h2>
                        <p className="lead text-muted my-5">Master new skills and achieve your goals with our expert-led courses in trading, freelancing, and e-commerce.</p>
                        <p style={{ lineHeight: "30px" }}>ASK is Pakistan’s #1 Courses Academy. Our mission is to empower individuals and businesses with the knowledge and skills they need to succeed in today's competitive world. Whether you're looking to boost your career or start your own business, ASK Coaching has the resources and expertise to help you reach your goals.</p>
                        <p><strong>Email:</strong> contact@askcoaching.com</p>
                        <p><strong>Phone:</strong> +923438788453</p>
                        <p><strong>Address:</strong> ASK Technologies PTE LTD., 160 Road #14-04, Chwok Azam</p>
                    </div>
                    <div className="col-md-6">
                        <img src="../src/Assests/LOGO.png" className="img-fluid rounded-circle" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
