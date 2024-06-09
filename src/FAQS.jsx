import React, { useState } from 'react';
import '../src/Style/Faqs.css';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import {
  Link
} from 'react-router-dom';
const FAQS = () => {
  const [activeAccordion, setActiveAccordion] = useState();

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion();
    } else {
      setActiveAccordion(index);
    }
  };

  const accordionData = [
    {
      question: 'What courses are offered by this academy?',
      answer:
        'Our academy offers a wide range of courses, including but not limited to programming, design, business, and language courses. You can explore our course catalog to see the full list of offerings.',
    },
    {
      question: 'Can I get a certificate upon course completion?',
      answer:
        'Yes, most of our courses offer certificates upon successful completion. These certificates can be a valuable addition to your resume or professional portfolio. Youll receive more information about obtaining certificates during the course.',
    },
    {
      question: 'What is the duration of the courses?',
      answer:
        'Course durations vary depending on the specific course. We offer both short-term courses that can be completed in a few weeks and longer-term programs that can span several months. You can find detailed information about each courses duration in the course description.',
    },
  ];

  const isAccordionActive = (index) => index === activeAccordion;

  return (
    <div className="container mt-5">
      <div className="row mt-5 mb-5">
        <div className="col-sm-4 pb-sm-0 pb-3 col-12 faqHeading">
          <h2 className='faq text-success'>Frequently Asked
            Questions
          </h2>
          <p>Is this guide help for you?
            If you still have any queries
            about the DigiKhata app then
            contact us now!</p>

          <Link to="contact"> <button className=' faqContact '>Contact Us</button> </Link>
        </div>
        <div className="col-sm-8 col-12 mb-2 pb-2">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item mb-2 pb-2">
              <div
                className={`accordion-header ${isAccordionActive(index) ? 'active' : ''
                  }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <div className="icon-container">
                  {isAccordionActive(index) ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
                </div>
              </div>
              {isAccordionActive(index) && (
                <div className="accordion-body">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
