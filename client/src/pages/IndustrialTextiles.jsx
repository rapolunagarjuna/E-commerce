import ItemGrid from '../components/ItemGrid'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

import image from '../assets/images/industrial-textiles/POLY LINERS.webp'
import image1 from '../assets/images/industrial-textiles/WOVEN COATED PE GEO-MEMBRANE.webp'
import image2 from '../assets/images/industrial-textiles/ROOF-UNDERLAYMENT.webp'
import image3 from '../assets/images/industrial-textiles/TARPS.webp'
import image4 from '../assets/images/industrial-textiles/HOUSE WRAP.webp'
import image5 from '../assets/images/industrial-textiles/LUMBER-WRAP.webp'


const products =[
    {
        name: 'Poly-Liners',
        services: "Made up of PE for DIY fans, painters, landscapers, contractors, etc. Ideal application in commercial / residential construction.",
        prodspecs: "Features: Spill proof, Leak proof and Water proof - Highly durable - Customizable color and size solutions available",
        imgSrc: image
    },
    {
        name: 'Woven Coated PE Geo-Membrane',
        services: "Medium to Heavy weight woven coated Polyethylene with an additional laminated film on the backside. Ideal geo-membrane for applications such as catch basins, canals, water retention ponds, fire reservoirs, waste water containment, Oil field pits, etc.",
        prodspecs: "Features:\n\n- Minimized thermal contraction or expansion\n- UV resistant and hydrostatic resistant\n- Coatings provide excellent heat seaming\n- Easy installation\n- Customizable size solutions available",
        imgSrc: image1
    },
    {
        name: 'Roof Underlayment',
        services: "Woven coated/Non-woven coated synthetic roofing underlayment material to augment the life span of a roof. Ideal for residential and commercial roofing.",
        prodspecs: "Features:\n\n- Anti-skid property for safety of roof installers\n- UV resistant, 100% water & air resistant\n- Easy installation\n- Customizable color, size and printing solutions available",
        imgSrc: image2 
    },
    {
        name: 'Tarps / Covers',
        services: "Tarps/cover fabrics made from coated HDPE, find application in railcar liners, truck covers, bale covers, boat / automobile covers and temporary shades.",
        prodspecs: "Features:\n\n- UV resistant and high-end durability\n- Rust-proof eyelet all-around\n- Seamless width offered up to 144″\n- Customizable color and size solutions available",
        imgSrc: image3 
    },
    {
        name: 'House Wrap',
        services: "Micro-perforated, designed to enhance weather resistance in exterior wall construction in residential/commercial construction. Light-weight & heavy-built than traditional building paper.",
        prodspecs: "Features:\n\n- UV resistant, 100% water barrier and vapour permeable\n- Easy installation\n- Customizable color, size and printing solutions available",
        imgSrc: image4
    },
    {
        name: 'Lumber Wrap',
        services: "Highest quality and cost-effective, micro perforated lumber wraps, woven from polypropylene / polyethylene. Applications in protection of lumber and wood products from weather and transit/handling damages and abrasions.",
        prodspecs: "Features:\n\n- UV resistant, Anti-skid and High-end durability\n- Preeminent Puncture and Tear resistant\n- Seamless width offered up to 144″\n- Customizable color and size solutions available",
        imgSrc: image5 
    }

];


export default function IndustrialTextiles(){
    return(
        <>
        <Navbar/>
            <p className= "text-5xl text-center font-extrabold pt-16">Agro-Textiles</p>
            <ItemGrid products = {products}/> 
        <Footer/>
        </>
    );
  }