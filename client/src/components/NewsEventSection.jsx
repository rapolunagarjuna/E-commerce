import React from "react";
import newsImage from "../assets/images/news-event-image.png"; // Replace with your image URL

function NewsEventSection() {
  return (
    <div className="max-w-3xl mx-auto text-left">
      <h2 className="text-3xl font-bold text-black mb-4">News & Events</h2>

    <div className="" style={{height:''}}>
    <div className="w-1/4 "><img src={newsImage} alt="about" /></div>
    <p>Feb. 5-8, 2023</p>
    <div className="font-bold">Geosynthetics Conference</div>
    <p>Kansas City Convention Center | Kansas City, MO USA</p>
      <p className="text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 mt-5 text-left text-green-700 hover:text-red-700" onClick={()=>{navigate(link, {replace: true})}}>Link</p>
      </div>
      </div>
      );
}

export default NewsEventSection;
