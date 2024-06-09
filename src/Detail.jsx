import React from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Style/Detail.css';

const Detail = ({ coursess }) => {
  console.log('coursess:', coursess);
  const { id } = useParams();
  console.log('id:', id);
  const course = coursess.find(course => course.id === parseInt(id));

  if (!course) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          Course not found
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0">
            <div className="row g-0">
              <div className="col-md-6 align-content-center">
                <img src={course.img} className="img-fluid rounded-start" alt={course.name} />
              </div>
              <div className="col-md-6">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="card-title fw-bold">{course.name}</h3>
                    <div className="price">
                      <s className="text-danger">${course.price}</s> {" "}
                      <span className="text-success">${course.price - 30}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2 className="h5">Course Description</h2>
                    <p className="card-text">{course.des}</p>
                  </div>
                  <div>
                    <h2 className="h5">More Details</h2>
                    {/* Add more details here as needed */}
                  </div>
                  <Link to="/" className="btn btn-success mt-4">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
