import React from 'react'
import "../src/Style/Contact.css"
import { GrMail } from "react-icons/gr" 
import { BiSolidPhoneCall } from "react-icons/bi" 
import { IoLogoWhatsapp } from "react-icons/io" 

import ContactImg from "../src/Assests/Contact.jpg"
const Contact = () => {
  return (
    <section>
    <div className='container'>
        <div className="row">
<div className="col-sm-6 col-12 contact-heading">
<h1>Got Queries? Reach Out To Us!</h1>
<p>At ASK Coaching Academy, our student support team is here to assist you with any questions or concerns you may have, day or night. Our primary focus is to prioritize the needs of our students, making sure they always feel comfortable and supported. ASK Coaching Academy is dedicated to simplifying complex educational tasks, making learning easier for you.</p>
</div>
<div className="col-sm-6 col-12">
    <img src={ContactImg} className='img-fluid' alt="" />
</div>
        </div>
    </div>
      <div className="container-fluid">
        <div className="row Contactmethods pb-5">
  <div className="heading">
    <h2 className='text-center fs-2 pt-3 pb-4 fw-bold text-white'>Contact Us!</h2>
    <p className='text-center text-white pb-4'>If you’re new to our app or an existing user who is unable to understand any functionality <br /> of DigiKhata or wants to suggest more improvements then reach out to us without any hassle.</p>
  </div>
  <div className="col-sm-3 col-12 text-center box mb-3">
  <GrMail className='contactIcon mb-3 mt-3 text-success' />
    <h2>Send Us An Email</h2>
    <a href="mailto:contact@digikhata.pk" className=" text-orange ">contact@digikhata.pk</a>
  </div>
  <div className="col-sm-3 col-12 text-center box mb-3 "> 
  <BiSolidPhoneCall className='contactIcon mb-3 mt-3 text-success' />
    <h2>Give Us A Call</h2>
    <a href="tel:+923438788453" className=" text-orange ">+92 313 7979 999</a>
  </div>
  <div className="col-sm-3 col-12  text-center box mb-3">
    <IoLogoWhatsapp className='contactIcon mb-3 mt-3 text-success' />
    <h2>WhatsApp</h2>
    <a href="https://wa.me/923438788453" className=" text-orange ">+92 313 7979 999</a>
  </div>
</div>
</div>
</section>
  )
}

export default Contact
