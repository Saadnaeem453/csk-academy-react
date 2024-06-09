import React from 'react';
import "../src/Style/footer.css";
import { BiLogoLinkedin } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer'>
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-sm-2">
            <img src="../src/Assests/LOGO.png" width={50} className='img-fluid' alt="" />
          </div>
          <div className="col-12 col-sm-10">
            <p>ASK is Pakistan’s #1 Courses Academy. This all-in-one bookkeeping and accounting App helps small businesses manage their ledgers on the go. It is available on Android, iOS, and online.</p>
          </div>
        </div>

        <div className="row pb-5">
          <div className="col-12 col-sm-6 pt-3 other">
            <p className='email'>contact@askcouching.com</p>
            <p className='no'>+923438788453</p>
            <p>ASK Technologies PTE LTD. <br />
              160 Road #14-04, Chwok Azam</p>
          </div>

          <div className="col-6 me-sm-0 me-auto col-sm-3 links">
            <Link to="">Privacy Policy</Link>
            <Link to="contact">Contact Us</Link>
            <Link to="">About Us</Link>
            <Link to="morecourses">Courses</Link>
          </div>
          <div className="col-6 col-sm-3 ms-sm-0 ms-auto socialLinks">
            <Link to=""><BiLogoLinkedin /></Link>
            <Link to=""><FaFacebookF /></Link>
            <Link to=""><RiTwitterXFill /></Link>
            <Link to=""><AiOutlineInstagram /></Link>
          </div>
        </div>
        <div className=" text-white text-center p-3 copyright text-success">
          © Copyright Reserved 2023 ASK.pk
        </div>
      </div>

    </section>
  );
}

export default Footer;
