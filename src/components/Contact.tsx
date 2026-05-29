import React from 'react';
import { FaFacebook } from 'react-icons/fa';

import { FaLine } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Gmail',
    value: 'kasiditkosit@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kasiditkosit@gmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '097-303-4873',
    href: 'tel:+66973034873',
  },
  {
    icon: <FaAddressBook />,
    label: 'Address',
    value: '47/110 Bueng, Si Racha, Chonburi 20230, Thailand',
    href: 'https://www.google.com/maps/search/?api=1&query=47%2F110+Bueng+Si+Racha+Chonburi+20230+Thailand',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/Scallarr',
    href: 'https://github.com/Scallarr',
  },
  {
    icon: <FaFacebook />,
    label: 'Facebook',
    value: 'kasidit kosit',
    href: 'https://www.facebook.com/martkasidit',
  },
  {
    icon: <FaLine />,
    label: 'LINE',
    value: 'mart@6822',
    href: 'https://line.me/R/ti/p/~mart%406822',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section container animate-fade-in delay-2">
      <h2 className="section-title">Contact Me</h2>
      <div className="glass-card contact-grid contact-grid-single">
        <div className="contact-info-card">
          <h3 className="contact-heading">Contact Info</h3>
          <p className="contact-intro">
            Open to full-time opportunities in frontend, full-stack, Web and mobile
            application development.
          </p>

          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-method-item"
            >
              <span className="contact-method-icon">{item.icon}</span>
              <div className="contact-method-details">
                <h4>{item.label}</h4>
                <p>{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
