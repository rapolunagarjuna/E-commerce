import React, { useState } from 'react';

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
    // Perform form submission or validation logic here
    // You can access the form field values using the state variables
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto bg-gray-100 p-4 rounded-lg">
      <div className="mb-2">
        <label htmlFor="firstName" className="block mb-1 font-semi-bold text-gray-800">First Name</label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="mb-2">
        <label htmlFor="lastName" className="block mb-1 font-semi-bold text-gray-800">Last Name</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block mb-1 font-semi-bold text-gray-800">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="mb-2">
        <label htmlFor="phone" className="block mb-1 font-semi-bold text-gray-800">Phone</label>
        <div className="flex">
          <input type="text" id="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="w-1/4 px-2 py-1 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500" placeholder="+XX" required />
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-3/4 px-2 py-1 border border-gray-300 rounded-r focus:outline-none focus:border-blue-500" required />
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="inquiry" className="block mb-1 font-semi-bold text-gray-800">Inquiry</label>
        <select id="inquiry" value={inquiry} onChange={(e) => setInquiry(e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required>
          <option value="">Select an option</option>
          <option value="product">Product</option>
          <option value="company">Company</option>
          <option value="service">Service</option>
          <option value="HR">HR</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="message" className="block mb-1 font-semi-bold text-gray-800">Your Message</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500" rows={4} required />
      </div>
      <div className="text-center">
        <button type="submit" className="px-3 py-2 font-semi-bold text-white bg-blue-500 rounded hover:bg-blue-600">Send</button>
      </div>
    </form>
  );
}
