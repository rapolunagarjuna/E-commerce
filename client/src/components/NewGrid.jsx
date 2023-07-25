import React from "react";
import { useNavigate } from 'react-router-dom';
import BlueBtn from './BlueBtn'
import image1 from '../assets/images/geosynthetics.jpg';
import image2 from '../assets/images/erosioncontrol.jpg';
import image3 from '../assets/images/industrialtextiles.jpg';
import image4 from '../assets/images/agrotextiles.jpg';
import image5 from '../assets/images/packagingtextiles.jpg';
import image6 from '../assets/images/accessories.jpg';

const products = [
    {
        name: 'Geosynthetics', 
        description: "Our geosynthetics are designed to enhance soil performance, providing reinforcement, separation, filtration, and containment solutions for civil engineering projects.",
        link: '/products/geosynthetics',
        imgSrc: image1
    },
    {
        name: 'Erosion Control',
        description: "Our erosion control products are designed to protect and stabilize soil surfaces against erosion and environmental factors.",
        link: '/products/erosion-control',
        imgSrc: image2
    },
    {   name: 'Industrial Textiles', 
        description: "For industrial applications, our industrial textiles are engineered to meet the demanding requirements of various industries, offering strength, durability, and reliability.",
        link: '/products/industrial-textiles',
        imgSrc: image3
    },
    {   name: 'Agro Textiles', 
        description: " Our agro textiles cater to the agricultural sector, providing innovative solutions for crop protection, soil stabilization, and irrigation.",
        link: '/products/agro-textiles',
        imgSrc: image4
    },
    {   name: 'Packaging Textiles', 
        description: " We offer packaging textiles designed to ensure the safe and efficient transport of goods, as well as a range of accessories to complement our product offerings.",
        link: '/products/packaging-textiles',
        imgSrc: image5
    },
    {   name: 'Accessories', 
        description: "Our accessories are designed to enhance the quality of our products and services.",
        link: '/products/accessories',
        imgSrc: image6
    }
]
  


export default function NewGrid() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      {products.map((item, index) => (
        <div key={index} className="w-6/12  min-w-fit h-fit flex flex-row mt-5 mb-5 items-center">
          
            <div className="min-w-96 w-3/12 min-h-96 h-fit  flex justify-center ">
                <img className="w-full object-cover" src={item.imgSrc} alt="" />
            </div>

            <div className="min-w-96 w-3/12 min-h-96 h-full  ml-5  text-center bg-slate-200 p-5 justify-between">
            
                <h1 className="text-2xl text-left font-bold pb-2 h-fit w-full"> {item.name} </h1>
                <p className="text-xl text-left pb-2 h-fit w-full overlfow-hidden"> {item.description} </p>

                <div className='flex flex-row justify-end w-full h-fit m-auto' >
                    <BlueBtn func={()=>navigate(item.link)} name="Learn more" />
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}
