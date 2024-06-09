import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Style/BecomeInstructor.css';

const BecomeInstructor = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                    <img
                        src="../src/Assests/IMG_20240527_214942.png"
                        className="img-fluid rounded-start"
                        alt="Instructor"
                    />
                </div>
                <div className="col-md-7">
                    <h3 className="display-4 text-success fw-bold">Become an instructor</h3>
                    <p className="lead">
                        Instructors from around the world teach millions of learners on Udemy.
                        We provide the tools and skills to teach what you love.
                    </p>
                    <button className="btn btn-success btn-lg">Start teaching today</button>
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructor;
