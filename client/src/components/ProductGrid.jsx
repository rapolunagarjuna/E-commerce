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




function Item({name, description, link ,imgSrc}) {
    const navigate = useNavigate();

    return(
        <div className="flex flex-row justify-center p-5 h-full">

            <div className="w-96 h-full ">
                <img src={imgSrc} className="w-full h-full object-cover" alt=" " />
            </div>


            <div className="bg-slate-200 w-96 h-fit ml-4 p-5">
                <div className="flex  flex-col justify-between">
                    <div className='text-left w-full h-fit'>
                        <h1 className="text-2xl font-bold pb-2"> {name} </h1>
                        <p className="text-xl pb-2"> {description} </p>
                    </div>
                    <div className='flex flex-row justify-end' >
                        <BlueBtn func={()=>navigate(link)} name="Learn more" />
                    </div>
                </div>
            </div>

        </div>
    );                                                                                                                                                                                                                                                                                                                                                                           
}


export default function ProductGrid() {
    return(
        <div className='flex flex-col w-full pt-20 pb-20'>
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
