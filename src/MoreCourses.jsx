import React from "react";
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";


import "../src/Style/Courses.css"


export const MoreCourses = ({ morecourses }) => {
const getid =(a)=>{
console.log(a)
}
  return (
    <section className="pb-5 mb-3 container-fluid courses">
      <div className="secTitle pt-5 pb-5">
        <div className="row mx-xl-5">
          <h1 className="arrival pb-2">All <span className="text-success">Courses</span></h1>

          {morecourses.map((course) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={course.id}>
              <Card style={{ width: "100%" }} className="mb-3 mt-5 mb-5 cord">
                <Card.Img
                  variant="top"
                  style={{ height: "200px", objectFit: "cover" }}
                  src={course.img}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.des}</Card.Text>
                  <div className="price" style={{ justifyContent: "space-between", fontWeight: "700" }}>
                    <s>${course.price}</s>{" "}
                    <span> ${course.price - 30}</span>
                  </div>
                  <div align="center" className="none">
                  <Link to={`detail/${course.id}`} onClick={()=>getid(course.id)} style={{ width: "80%" }} className="btn btn-success mt-2">
  Details
</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
         
        </div>
      </div>
    </section>
  );
};

export default MoreCourses;
