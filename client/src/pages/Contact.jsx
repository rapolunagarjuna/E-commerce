import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

import contactImage from '../assets/images/contact.jpg';

export default function Contact() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <p className='text-left m-auto text-5xl font-bold p-16'>Want to know more? Lets talk</p>
      <div className='relative m-auto h-full w-4/12 flex flex-row p-16 relative '>
        <img className='h-full absolute left-0 top-0' src={contactImage} alt="Contact"/>

        <div className='absolute w-fit -mb-10 -ml-10 h-fit bottom-0 right-0'>
          <ContactForm />
        </div>
        
      </div>
      <div className='h-32 w-full'>

      </div>
      <Footer/>
    </div>
  );
}

