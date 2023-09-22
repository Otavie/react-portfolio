import React, { useRef, useState } from 'react';
import { Notification } from '../components/Notification';
import '../contact.css';
import emailjs from '@emailjs/browser';
import { Row, Col } from 'react-bootstrap';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

export const ContactPage = () => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setNotificationMessage('Message was sent successfully!');
        setShowNotification(true);
      }, (error) => {
        console.log(error.text);
        setNotificationMessage('Message sending failed!');
        setShowNotification(true);
      });

      e.target.reset();
  };

  const closeNotification = () => {
    setShowNotification(false);
  }

  return (
    <div className="contact" style={{ marginTop: '88px' }}>
      <h2 className="mt-5 animate__animated animate__fadeInDown">Let's Talk!</h2>
      <form ref={form} onSubmit={sendEmail} className="animate__animated animate__fadeInUp">
        <Row className="container container-row my-5">
          <Col lg={6} sm={12} className="left-form">
            <input className="mb-4" type="text" name="subject" placeholder="Subject" required />
            <input className="mb-4" type="text" name="user_name" placeholder="Full name" required />
            <input className="mb-4" type="email" name="user_email" placeholder="Email Address" required />
          </Col>          
          <Col lg={6} sm={12} className="right-form">
            <textarea className="mb-4" name="message" placeholder="Email Content" required />
            <button className="my-2 send-email-btn" type="submit">Send Message</button>
          </Col>          
        </Row>
      </form>

      {showNotification && (
        <Notification message={notificationMessage} onClose={closeNotification} />
      )}
    </div>
  );
};