import React, { useState } from "react";
import Footer from "./Footer";

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState();
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeCheck: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleAgreeCheck = (e) => {
    setContactForm({ ...contactForm, agreeCheck: e.target.checked });
  };
  const handleContactSendMessage = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      submitted &&
      contactForm.firstName &&
      contactForm.lastName &&
      contactForm.email &&
      contactForm.email.includes("@") &&
      contactForm.message &&
      contactForm.agreeCheck
    ) {
      setValidated(true);
      alert("Message Sent");
    }
  };
  if (validated) {
    window.location.reload();
  }
  const errorStyles = {
    border: "1px solid #F89687",
    boxShadow : "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC"
  }
  
  const fullName = "Samuel Adeniyi";
  return (
    <div>
      <div className='contact-wrap'>
        <p style={{ fontSize: "30px" }}>Contact Me</p>
        <span className='contact-span'>
          Hi there, contact me to ask me about anything you have in mind.
        </span>
        <form className='contact-form' method='post'>
          <div className='contact-name-wrap'>
            <div className='contact-name-sub-wrap'>
              <label className='contact-name-p'>First Name</label>

              <input
                name='firstName'
                id='first_name'
                type='text'
                style={ submitted && !contactForm.firstName ? errorStyles : null}
                className='contact-name-input'
                placeholder='Enter your first name'
                onChange={handleChange}
                value={contactForm.firstName}
              />
              {submitted && !contactForm.firstName ? (
                <span className='contact-err-message'> Input first name</span>
              ) : null}
            </div>
            <div className='contact-name-sub-wrap'>
              <label className='contact-name-p'>Last Name</label>

              <input
                name='lastName'
                id='last_name'
                type='text'
                style={ submitted && !contactForm.lastName ? errorStyles : null}
                className='contact-name-input'
                placeholder='Enter your last name'
                onChange={handleChange}
                value={contactForm.lastName}
              />
              {submitted && !contactForm.lastName ? (
                <span className='contact-err-message'> Input last name</span>
              ) : null}
            </div>
          </div>
          <div>
            <label className='contact-name-p'>Email</label>
            <input
              name='email'
              id='email'
              type='email'
              style={ submitted && !contactForm.email ? errorStyles : submitted && !contactForm.email.includes("@")  ? errorStyles : null}
              className='contact-name-input'
              placeholder='yourname@email.com'
              onChange={handleChange}
              value={contactForm.email}
            />
            {submitted && !contactForm.email ? (
              <span className='contact-err-message'> Input email</span>
            ) : submitted && !contactForm.email.includes("@") ? (
              <span className='contact-err-message'>
                Input Valid Email Address
              </span>
            ) : null}
          </div>
          <div>
            <label className='contact-name-p'>Message</label>
            <textarea
              name='message'
              id='message'
              style={ submitted && !contactForm.message ? errorStyles : null}
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className='contact-name-input-message'
              onChange={handleChange}
              value={contactForm.message}
            />
            {submitted && !contactForm.message ? (
              <span className='contact-err-message'>
                Please enter a message
              </span>
            ) : null}
          </div>
          <div className='contact-agree-wrap'>
            <input
              name='agreeCheck'
              type='checkbox'
              checked={contactForm.agreeCheck}
              onChange={handleAgreeCheck}
              style={{ margin: "0 10px" }}
            />
            <label className='contact-agree-span' >
              You agree to providing your data to {fullName} who may contact
              you.
            </label>
            <br />
            {submitted && !contactForm.agreeCheck ? (
              <span className='contact-err-message'>
                Please click on checkbox
              </span>
            ) : null}
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
