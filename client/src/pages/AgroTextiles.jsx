import ItemGrid from '../components/ItemGrid'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import image from '../assets/images/agro-textiles/AGRI-LINERS.webp'
import image1 from '../assets/images/agro-textiles/AGRICULTURE-BARN-CURTAIN.webp'
import image2 from '../assets/images/agro-textiles/COMPOSITE-LANDSCAPE-FABRIC.webp'
import image3 from '../assets/images/agro-textiles/POLYSPUN-LANDSCAPE-FABRIC.webp'
import image4 from '../assets/images/agro-textiles/NETTINGS.webp'
import image5 from '../assets/images/agro-textiles/FROST-PROTECTION.webp'
import image6 from '../assets/images/agro-textiles/WOVEN-GROUND-COVER.webp'

const products =[
    {
        name: 'Agri-Liners',
        services: "Woven coated LDPE/HDPE product that has many resourceful uses such as water harvesting and environmental control for applications in agriculture, pond/canal liner.",
        prodspecs: "Features:\n\n- Highly durable, strong, seam and weld ability\n- UV resistant\n- Cost effective and robust installation\n- Customizable color and size solutions available",
        imgSrc: image
    },
    {
        name: 'Agriculture Barn Curtain',
        services: "Woven coated LDPE/HDPE product that provides natural ventilation during summer and essential winter/weather protection and also allows the natural light to pass through for applications in agriculture, poultry, greenhouses, and storages.",
        prodspecs: "Features:\n\n- Natural color\n- UV and abrasion resistant\n- Cost effective and easy installation\n- Customizable color and size solutions available",
        imgSrc: image1
    },
    {
    name: 'Composite Landscape Fabric ',
    services: "Made from polypropylene woven/non-woven or spun bond that is employed in controlling weeds by hindering their exposure to sunlight.",
    prodspecs: "Features:\n\n- Lightweight and easy to install\n- Ideal for Residential/commercial/industrial landscaping\n- Most effective weed barrier for slopes designed to retain coverage of mulch, barks, pine straws, and rocks\n- Blocks weed & reduces erosion with water permeable and mildew resistant capabilities\n- High UV resistant\n- Customizable solutions available in addition to standard roll size of 3’ to 12’ x 250’",
    imgSrc: image2
    },
    {
        name: 'Polyspun Landscape Fabric',
        services: "Used as weed barrier in residential and commercial yard applications.",
        prodspecs: "Features:\n\n- Lightweight and easy to install\n- Ideal for Residential/commercial/industrial landscaping\n- UV resistant\n- Customizable color and size solutions available in addition to std. roll size of 3’ to 12’ x 300’",
        imgSrc: image3
    },
    {
        name: 'Shade Nets',
        services: "Available in premium Woven and budget knitted options that provide excellent protection from sun and wing damage. Ideal for applications such as hail protection, bird protection, shade houses, greenhouses, patio screening, windbreak, and pool covering.",
        prodspecs: "Features:\n\n- UV protection and bird protection\n- Keeps animals and plants cooler\n- Reduces moisture loss\n- Water permeable for rain and irrigation\n- Resistant to chemicals\n- Cost effective and easy installation\n- Customizable size solutions available",
        imgSrc: image4
    },
    {
        name: 'Frost Protection',
        services: "Effective in outdoor and greenhouse applications where it can provide essential frost and freeze protection for nursery stock, vegetables, foliage, containerized ornamentals, and turf. Can also be used as ground cover.",
        prodspecs: "Features:\n\n- Permit light up to 35%-95%\n- Effective protection up to -20°C\n- Available in light, medium, and heavy weights\n- Cost effective and easy installation\n- Long-lasting for multiple season use\n- Customizable size solutions available",
        imgSrc: image5
    },
    {
        name: 'Woven Ground Cover',
        services: "Provides a stable, permeable layer for ensuring weed control in applications such as commercial nurseries, outdoor agricultural settings, and greenhouses.",
        prodspecs: "Features:\n\n- Customizable solutions manufactured on circular & sulzer looms with width up to 17.5’\n- Blocks weed & reduces erosion with water permeability and mildew resistant capabilities\n- High UV resistant\n- Agri UV offered",
        imgSrc: image6
    }
     
];
export default function AgroTextiles(){
    return(
        <>
        <Navbar/>
        <p className= "text-5xl text-center font-extrabold pt-16">Agro-Textiles</p>
        <ItemGrid products = {products}/> 
        <Footer/>
        </>
    );
  }