import ItemGrid from '../components/ItemGrid'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import image from '../assets/images/packaging-textiles/CONTAINERLINERS.webp'
import image1 from '../assets/images/packaging-textiles/BOPPBAGS.webp'
import image2 from '../assets/images/packaging-textiles/DUNNAGEBAGS.webp'
import image3 from '../assets/images/packaging-textiles/BULKBAGS-SMALLBAGS.webp'


const products=[
    {
    name: 'Container Liners',
    services: "Provides protection to the cargo from moisture and dirt, ensuring safety and disinfected transport method, made up of polyethylene and polypropylene.",
    prodspecs: "Features:\n\n- Extremely effective in avoiding Cargo Contamination\n- Cost-effective, Easy and quick to install\n- Completely water-proof\n- Customizable size solutions available",
    imgSrc: image 
    },
    {
        name: 'BOPP Bags',
        services: "PP woven BOPP block bottom valve bags and BOPP laminated bags offered in up to 8 color printing options. Application in packaging of fertilizers, food products and pet foods.",
        prodspecs: "Features:\n\n- Cost-Effective\n- Customizable bags of various size available",
        imgSrc: image1 
    },
    {
        name: 'Dunnage Bags',
        services: "Poly-bladder dunnage bags or air bags are uniquely designed rectangular bag for use to secure and stabilize cargo with valves installed at both ends for easy air filling from either side. Ideal application in cargo movement by road, rail and sea.",
        prodspecs: "Features:\n\n- Cost-effective, lightweight and reusable\n- Waterproof and flexible to fill up every shape and odd space\n- Customizable color and size solutions available",
        imgSrc: image2 
    },
    {
        name: 'FIBC / Bulk Bags',
        services: "Flexible Intermediate Bulk Container (FIBC)/bulk bags are ideal for storing, packaging and transporting a wide range of construction materials, minerals, chemicals, agricultural products, hazardous and non-hazardous waste. Applications in agriculture, construction and industrial sectors.",
        prodspecs: "Features:\n\n- Baffled, ventilated, anti-sift, anti-static and UN certified\n- Custom printed, non-printed and cost effective\n- Customizable bags/containers available",
        imgSrc: image3
    }
];


export default function PackagingTextiles(){
    return(
        <>
        <Navbar/>
            <p className= "text-5xl text-center font-extrabold pt-16">Packaging-Textiles</p>
            <ItemGrid products = {products}/> 
        <Footer/>
        </>
    );
}