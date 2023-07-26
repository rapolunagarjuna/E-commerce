import React from 'react';
import Navbar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import contactImage from '../assets/images/contact.jpg';
import HeadSection from "../components/HeadSeaction";

export default function Contact() {
  return (
    <div className='flex flex-col w-screen justify-center items-center'>
      <Navbar />
      <HeadSection heading='Contact' imgSrc={contactImage}/>
      <ContactForm />
      <Footer />
    </div>
  );
}

