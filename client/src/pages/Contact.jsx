import React from 'react';
import Navbar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import contactImage from '../assets/images/contact.jpg';

export default function Contact() {
  return (
    <div className='flex flex-col w-screen justify-center items-center'>
      <Navbar />

      <div className='bg-cover bg-center flex flex-col w-full text-center justify-center'
        style={{
          height: '700px',
          backgroundImage: `url(${contactImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <p className='text-stone-50 text-7xl font-bold'>Contact</p>
      </div>
      
      <ContactForm />

      <Footer />
    </div>
  );
}

