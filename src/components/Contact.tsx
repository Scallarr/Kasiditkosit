import React from 'react';
import { FaFacebook } from 'react-icons/fa';

import { FaLine } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';


const contactItems = [
  {
    icon: <FaEnvelope />,
    labelKey: 'gmail',
    value: 'kasiditkosit@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kasiditkosit@gmail.com',
  },
  {
    icon: <FaPhone />,
    labelKey: 'phone',
    value: '097-303-4873',
    href: 'tel:+66973034873',
  },
  {
    icon: <FaAddressBook />,
    labelKey: 'address',
    value: '47/110 Bueng, Si Racha, Chonburi 20230, Thailand',
    href: 'https://www.google.com/maps/search/?api=1&query=47%2F110+Bueng+Si+Racha+Chonburi+20230+Thailand',
  },
  {
    icon: <FaGithub />,
    labelKey: 'github',
    value: 'github.com/Scallarr',
    href: 'https://github.com/Scallarr',
  },
  {
    icon: <FaFacebook />,
    labelKey: 'facebook',
    value: 'kasidit kosit',
    href: 'https://www.facebook.com/martkasidit',
  },
  {
    icon: <FaLine />,
    labelKey: 'line',
    value: 'mart@6822',
    href: 'https://line.me/R/ti/p/~mart%406822',
  },
];

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="section container">
      <div className="title-frame-container reveal">
        <div className="title-frame">
          <h2 className="section-title">{t.contact.title}</h2>
        </div>
      </div>
      <div className="glass-card contact-grid contact-grid-single reveal">
        <div className="contact-info-card">
          <h3 className="contact-heading">{t.contact.heading}</h3>
          <p className="contact-intro">
            {t.contact.intro}
          </p>

          {contactItems.map((item, index) => (
            <a
              key={item.labelKey}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-method-item reveal"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <span className="contact-method-icon">{item.icon}</span>
              <div className="contact-method-details">
                <h4>{t.contact.labels[item.labelKey as keyof typeof t.contact.labels]}</h4>
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
