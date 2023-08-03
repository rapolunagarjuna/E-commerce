import React from 'react';
import fbIcon from '../assets/images/fbimg.png';
import twitterIcon from '../assets/images/twitterimg.png';
import LinkedinIcon from '../assets/images/linkedinimg.png';
import instagramIcon from '../assets/images/instaimg.png';

export default function Footer() {
  return (
    <div className='bg-slate-900 text-xs 2xl:text-sm w-full h-fit p-3 2xl:p-10 self-end'>
      <div className='flex flex-row justify-evenly h-full'>
        <div className='w-fit'>
          <h3 className= 'text-white font-bold'>Products</h3>
          <ul className='mt-2 text-gray-300 '>
            <li>Geosynthetics</li>
            <li>Erosion Control</li>
            <li>Agro Textiles</li>
            <li>Industrial Textiles</li>
            <li>Packaging Textiles</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div className='w-fit '>
          <h3 className='text-white font-bold'>About Us</h3>
          <ul className='mt-2 text-gray-300'>
            <li>Company</li>
            <li>Location</li>
            <li>Team</li>
          </ul>
        </div>

        <div className='w-fit '>
          <h3 className='text-white font-bold'>Socials</h3>
          <ul className='mt-2 flex items-center text-gray-300'>
            <li><img className='h-6 w-6 mr-2' src={fbIcon} alt='Facebook' /></li>
            <li><img className='h-6 w-6 mr-2' src={twitterIcon} alt='Twitter' /></li>
            <li><img className='h-6 w-6 mr-2' src={instagramIcon} alt='Instagram' /></li>
            <li><img className='h-6 w-6 mr-2' src={LinkedinIcon} alt='LinkedIn' /></li>
          </ul>
        </div>

        <div className='w-fit '>
          <h4 className='text-white font-bold'>Contact Us</h4>
          <p className='mt-2 text-gray-300'>770-544-7392</p>
          <p className='mt-1 text-gray-300'>sales@parglobal.us</p>
        </div>
      </div>
    </div>
  );
}
