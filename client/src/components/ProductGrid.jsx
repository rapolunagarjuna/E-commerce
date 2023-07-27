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
        <div className="flex flex-col justify-center gap-10 text-primary">
            <div style={{height: "350px" }}>
                <img src={imgSrc} className="w-full h-full object-cover" alt=" " />
            </div>

            <div className="h-fit" >
                <div className="flex flex-col relative " > 
                    <div className='text-left h-fit'>
                        <p className="text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl font-bold pb-2"> {name} </p>
                        <p className="text-xl pb-2"> {description} </p>
                        <p className='text-lg text-right transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 duration-200 text-green-600 hover:text-red-500' onClick={()=>navigate(link)}>Discover more</p>
                    </div>
                </div>
            </div>

        </div>
    );                                                                                                                                                                                                                                                                                                                                                                           
}


export default function ProductGrid() {
    return(
        <div className='grid mx-auto 2xl:w-9/12 2xl:grid-cols-3  w-10/12 xl:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-16 pb-44 place-items-start'>
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
