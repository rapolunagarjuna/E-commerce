import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

import image1 from "../assets/images/agro-textiles/FROST-PROTECTION.webp";
import image2 from "../assets/images/industrialtextiles.jpg";
import image3 from "../assets/images/agro-textiles/WOVEN-GROUND-COVER.webp";
import image4 from "../assets/images/industrial-textiles/LUMBER-WRAP.webp";
import image5 from "../assets/images/industrial-textiles/WOVEN-COATED-PE-GEO-MEMBRANE.webp";



function Card({name, link}) {

    const navigate = useNavigate();
  
    return (
        <div className="w-full h-fit p-5 text-primary text-xl bg-secondary bg-opacity-60">
            <p>{name}</p>
            <p className="text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 mt-5 text-right text-green-700 hover:text-red-700" onClick={()=>{navigate(link, {replace: true})}}>Discover more</p>
        </div>
    )
}

function HeroDiv({ id, name, link, setHoveredDiv, hoveredDiv }) {

    const images = {
      'div1': image1,
      'div2': image2,
      'div3': image3,
      'div4': image4,
      'div5': image5,
    }
  
    const backgroundPositionMap = {
      'div1': '0% 0%',
      'div2': '20% 0%',
      'div3': '40% 0%',
      'div4': '60% 0%',
      'div5': '80% 0%',
    }

    const backgroundStyles = {
        backgroundSize: '600% 100%',
        backgroundRepeat: 'no-repeat',
    }
  
    return (
      <div 
        className="flex flex-col justify-end h-full w-1/5 border p-10" 
        onMouseEnter={() => setHoveredDiv(id)}
        onMouseLeave={()=> setHoveredDiv("null")}
        style={{ 
          ...backgroundStyles,
          backgroundImage: `url(${hoveredDiv === id || hoveredDiv === "null" ? images[id] : images[hoveredDiv]})`, 
          backgroundPosition: backgroundPositionMap[id],
        }}
      >   
        { (hoveredDiv === id || hoveredDiv === "null") ? <Card name={name} link={link} /> : <div></div> }
      </div>
    );
}

export default function HeroSection() {
    
    const [hoveredDiv, setHoveredDiv] = useState("null");
  
    const divData = [
      { id: 'div1', name: 'Frost Protection', link: 'products/frost-protection' },
      { id: 'div2', name: 'Agro Textiles', link: '/agro-textiles' },
      { id: 'div3', name: 'Woven Ground Cover', link: 'products/woven-ground-cover' },
      { id: 'div4', name: 'Lumber wrap', link: 'products/lumber-wrap' },
      { id: 'div5', name: 'Woven Coated PE Geo-Membrane', link: 'products/geo-membrane' },
    ];
  
  
    return (
      <div className="flex flex-col w-full h-screen text-xl text-primary">
        <Navbar />
        <div className="w-full flex-grow flex flex-row">
          {divData.map((divItem) => (
            <HeroDiv 
              key={divItem.id}
              id={divItem.id}
              name={divItem.name}
              link={divItem.link}
              setHoveredDiv={setHoveredDiv}
              hoveredDiv={hoveredDiv}
            />
          ))}
        </div>
      </div>
    );
}
  
