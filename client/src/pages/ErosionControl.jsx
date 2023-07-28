import ItemGrid from '../components/ItemGrid'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import image from '../assets/images/erosion-control/SANDBAGS.webp'
import image1 from '../assets/images/erosion-control/DEWATERINGBAGS.webp'
import image2 from '../assets/images/erosion-control/GABIONS.webp'
import image3 from '../assets/images/erosion-control/COIRS.webp'
import image4 from '../assets/images/erosion-control/JUTE-BURLAP.webp'



const products = [
    {
      name: 'Specialized Sandbags',
      services: "Specialized sandbags made of polypropylene, ideal for flood control and military fortification.",
      prodspecs: "Features:\n\n- UV protected\n- Available with tie string\n- Cost-Effective\n- Customizable color and size solutions available",
      imgSrc: image
    },
    {
        name: 'Dewatering Bags',
        services: "Dewatering bags made out of non-woven synthetic fiber.",
        prodspecs: "Features:\n\n- Highly durable, permeability to water and resistant to biodegradation\n- UV resistant and anti-Chemical corrosion\n- Customizable size solutions available",
        imgSrc: image1
    },
    {
        name: 'Gabions',
        services: "Best in class 3 different types of gabions: double twisted wire mesh, selvedge wire & lacing wire. Ideal for application such as retaining wall structure, slope protection, highways, bridges, rivers/canals, etc.",
        prodspecs: "Features:\n\n- Easy & quick to assemble\n- Eco-Friendly\n- Endurance & flexibility",
        imgSrc: image2
    },
    {
        name: 'Coirs',
        services: "Best in class 3 different types of coirs: coir Geo Mesh, Coir Log, and coir pith which help control soil erosion. Ideal application for pond stabilization, earthen slope bridge approaches / hill slope, afforestation of semi-arid zones, erosion management at rivers / canals.",
        prodspecs: "Features are:  Protect land surface. \n Promote quick vegetation.\n 100% natural & eco-friendly.\n Woven & non-woven preparation. \n Customizable color and size solutions available",
        imgSrc: image3
    },
    {
        name: 'Jute/Burlap',
        services: "Various burlap-related products such as: bags, strips, concrete curing covers, rolls and squares. Ideal for application such as soil exposed slopes of embankments of roads/rail, mining dumps, stabilization of sand dunes on sea beach and concrete curing.",
        prodspecs: "Features:\n\n- Highly durable \n- Extremely effective in absorbing moisture\n- Biodegradable & eco-friendly",
        imgSrc: image4
    },
  ];
  export default function ErosionControl(){
    return(
        <>
        <Navbar/>
       
        <p className= "text-5xl text-center font-extrabold pt-16">Erosion Control</p>
        <ItemGrid products = {products}/> 
        
        <Footer/>
        </>
    );
  }