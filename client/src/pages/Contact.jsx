import React from 'react';
import Navbar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

import contactImage from '../assets/images/contact.jpg';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <div className="flex items-center">
            <img src={contactImage} alt="Contact" className="w-1/2 " />
            <div className="ml-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

