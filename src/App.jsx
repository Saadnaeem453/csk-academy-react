import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.jsx'

import Home from "./Home.jsx"
import Courses from "./Courses.jsx"
import About from "./About.jsx"


import MoreCourses from "./MoreCourses.jsx"
import Mousemove from "./Mousemove.jsx"
import Loginform from "./LoginForm.jsx"
import Detail from "./Detail.jsx"
import FAQS from "./FAQS.jsx"
import Contact from "./Contact.jsx"
import Instructor from "./Instructor.jsx"
import Footer from "./Footer.jsx"
import img1 from "../src/Assests/Trading.jpg";
import img2 from "../src/Assests/python.jpg";
import img3 from "../src/Assests/WebDev.jpg";
import img4 from "../src/Assests/wordpress.jpg";
import img5 from "../src/Assests/Trading.jpg";
import img6 from "../src/Assests/python.jpg";
import img7 from "../src/Assests/WebDev.jpg";
import img8 from "../src/Assests/wordpress.jpg";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);









  const courses = [
    {
      id: 1,
      name: "New Game",
      img: img1,
      des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
      price: 430,
      // btn:'Add to Cart'
    },
    {
      id: 2,
      name: "Gamming Handphons",
      img: img2,
      des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
      // btn:'Add to Cart',
      price: 100,
    },
    {
      id: 3,
      name: "D-Game",
      img: img3,
      des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
      price: 150,
      // btn:'Add to Cart'
    },
    {
      id: 4,
      name: "Lenovo",
      img: img4,
      des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
      price: 250,
      // btn:'Add to Cart'
    },
    {
      id: 5,
      name: "New Game",
      img: img5,
      des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
      price: 430,
      // btn:'Add to Cart'
    },
    {
      id: 6,
      name: "New Game",
      img: img6,
      des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
      price: 430,
      // btn:'Add to Cart'
    },
    {
      id: 7,
      name: "New Game",
      img: img7,
      des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
      price: 430,
      // btn:'Add to Cart'
    },
    {
      id: 8,
      name: "New Game",
      img: img8,
      des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
      price: 430,
      // btn:'Add to Cart'
    },

  ];

  const mainCourses = courses.slice(0, 4);
  return (
    <>
      <Mousemove />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Courses courses={mainCourses} />
              <Instructor />
              <FAQS />
            </>
          }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="/morecourses" element={<MoreCourses morecourses={courses} />} />

          <Route path="morecourses/detail/:id" element={<Detail coursess={courses} />} />
          <Route path="/about" element={<About />} />
          <Route path="detail/:id" element={<Detail coursess={courses} />} />
          <Route
            path="/login"
            element={
              <Loginform isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
