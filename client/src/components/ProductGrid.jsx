import { useNavigate } from 'react-router-dom';
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




function Item({name, description, link ,imgSrc}) {
    const navigate = useNavigate();

    return(
        <div className="relative w-full h-full  hover:cursor-pointer flex flex-col justify-center  text-slate-100" 
            style={{ backgroundImage:`url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={()=>navigate(link, {replace: true})}
            >
            {/* <img src={imgSrc} className="w-full h-full object-cover" alt=" " /> */}
            <p className="z-10 text-center hover:text-secondary transition ease-in-out duration-200 text-xl hover:text-2xl 2xl:text-3xl 2xl:hover:text-4xl  font-bold pb-2"> {name} </p>
            <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
    );                                                                                                                                                                                                                                                                                                                                                                           
}


export default function ProductGrid() {
    return(
        <div className='w-8/12 h-screen grid grid-cols-2 gap-5 place-items-center'>
            {products.map(product => 
            <Item 
                key={product.name} 
                name={product.name} 
                description={product.description} 
                link={product.link}
                imgSrc={product.imgSrc}
            />)}
        </div>
    );
}
