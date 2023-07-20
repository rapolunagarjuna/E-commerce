import React from 'react';
import Navbar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import contactImage from '../assets/images/contact.jpg';

export default function Contact() {
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center'>
      <Navbar />

      
      
      <div className="m-auto w-5/12 min-w-96 h-3/6 relative">
          <img src={contactImage} alt="Contact" className='object-cover object-left relative -z-10 top-0 left-0 w-full h-full' />

          <div className="h-fit w-fit absolute bottom-0 right-0  -mb-16 -mr-16" >
              <ContactForm />
          </div>

      </div>
    

      <Footer />
    </div>
  );
}

