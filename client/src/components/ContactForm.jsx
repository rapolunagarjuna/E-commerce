import React, { useState } from 'react';
import BlueBtn from './BlueBtn';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col w-4/12 min-w-96 gap-2 mt-28 mb-64 text-base 2xl:text-lg text-primary ">
      
      <p>First Name*</p>
      <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-3 border border-gray-300  focus:outline-none focus:border-blue-500" required />
      
      <p className='mt-5'>Last Name*</p>
      <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-3 border border-gray-300  focus:outline-none focus:border-blue-500" required />


      <p className='mt-5'>Email*</p>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300  focus:outline-none focus:border-blue-500" required />

      
      <p className='mt-5'>Phone*</p>
      <div className="flex flex-row">
        <input type="text" id="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="w-2/12 p-3 border border-gray-300  focus:outline-none focus:border-blue-500" placeholder="+XX" required />
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-10/12 p-3 border border-gray-300  focus:outline-none focus:border-blue-500" required />
      </div>


      <p className='mt-5'>Inquiry*</p>
      <select id="inquiry" value={inquiry} onChange={(e) => setInquiry(e.target.value)} className="w-full p-3 border border-gray-300  focus:outline-none focus:border-blue-500" required>
        <option value="">Select an option</option>
        <option value="product">Product</option>
        <option value="company">Company</option>
        <option value="service">Service</option>
        <option value="HR">HR</option>
        <option value="other">Other</option>
      </select>

      
      <p className='mt-5'>Your Message*</p>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 border border-gray-300  mb-5 focus:outline-none focus:border-blue-500" rows={4} required />

      <div className="text-center  flex flex-row justify-end">
        <BlueBtn name='Send' func={handleSubmit} />
      </div>
    </form>
  );
}
