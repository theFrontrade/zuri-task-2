import React, { useState } from "react";
import Footer from "./Footer";

const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleContactFirstName = (e) => {
    e.preventDefault();
    setContactForm({ ...contactForm, firstName: e.target.value });
  };
  const handleContactLastName = (e) => {
    e.preventDefault();
    setContactForm({ ...contactForm, lastName: e.target.value });
  };
  const handleContactEmail = (e) => {
    e.preventDefault();
    setContactForm({ ...contactForm, email: e.target.value });
  };
  const handleContactMessage = (e) => {
    e.preventDefault();
    setContactForm({ ...contactForm, message: e.target.value });
  };
  const handleContactSendMessage = (e) => {
    e.preventDefault();
    console.log(contactForm);
  };
  const fullName = "Samuel Adeniyi";
  return (
    <div>
      <div className='contact-wrap'>
        <p style={{ fontSize: "30px" }}>Contact Me</p>
        <span className='contact-span'>
          Hi there, contact me to ask me about anything you have in mind.
        </span>
        <form className='contact-form'>
          <div className='contact-name-wrap'>
            <div className='contact-name-sub-wrap'>
              <p className='contact-name-p'>First Name</p>
              <input
                name='firstname'
                id='first_name'
                type='text'
                className='contact-name-input'
                placeholder='Enter your first name'
                onChange={handleContactFirstName}
                value={contactForm.firstName}
              />
            </div>
            <div className='contact-name-sub-wrap'>
              <p className='contact-name-p'>Last Name</p>
              <input
                id='last_name'
                type='text'
                className='contact-name-input'
                placeholder='Enter your last name'
                onChange={handleContactLastName}
                value={contactForm.lastName}
              />
            </div>
          </div>
          <div>
            <p className='contact-name-p'>Email</p>
            <input
              id='email'
              type='text'
              className='contact-name-input'
              placeholder='Samueladeniyi@gmail.com'
              onChange={handleContactEmail}
              value={contactForm.email}
            />
          </div>
          <div>
            <p className='contact-name-p'>Message</p>
            <textarea
              id='message'
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className='contact-name-input-message'
              onChange={handleContactMessage}
              value={contactForm.message}
            />
          </div>
          <div className='contact-agree-wrap'>
            <input type='checkbox' style={{ margin: "0 10px" }} />
            <span className='contact-span'>
              You agree to providing your data to {fullName} who may contact
              you.
            </span>
          </div>
          <button
            id='btn__submit'
            type='submit'
            className='send-message-button'
            onClick={handleContactSendMessage}
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contacts;
