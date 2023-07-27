import ItemGrid from '../components/ItemGrid'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import image from '../assets/images/geosynthetics/SILT-FENCE.webp'
import image1 from '../assets/images/geosynthetics/WGEOTEXTILE.webp'
import image2 from '../assets/images/geosynthetics/PAVING.webp'
import image3 from '../assets/images/geosynthetics/WIREBACK.webp'
import image4 from '../assets/images/geosynthetics/SFENCE.webp'
import image5 from '../assets/images/geosynthetics/NWOVEN.webp'
import { useNavigate } from 'react-router-dom'
import bgImg from '../assets/images/geosynthetics.jpg';

const products = [
    {
        name: 'Silt Fence', 
        imgSrc: image,
        link: '/silt-fence'
    },
    {
        name: 'Woven Geotextile',
        imgSrc: image1,
        link: '/woven_geotextile'

    },
    {   name: 'Paving / Retention Grid', 
        imgSrc: image2,
        link: '/paving_retention'

    },
    {   name: 'Wire Backed Slit Fence', 
        imgSrc: image3,
        link: '/wire_backed_slit_fence'
    },
    {   name: 'Safety Fence', 
        imgSrc: image4,
        link: '/safety_fence'
    },
    {   name: 'Non-Woven Geotextile', 
        imgSrc: image5,
        link: '/non_woven_geotextile'
    }
]



function Item({name, imgSrc, link}) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col w-full h-96 justify-end' onClick={()=>navigate(link)}
             style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} >
            <div className='flex h-16 flex-col justify-center w-full  text-center bg-secondary bg-opacity-50  text-xl text-primary '>
                <span>{name}</span>
                
            </div>
        </div>
    )
}

function Grid({products}) {
    return(
        <div className='grid mx-auto 2xl:w-9/12 2xl:grid-cols-3  w-10/12 xl:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-16 pb-44 place-items-start'>
            {products.map(product => <Item name={product.name} imgSrc={product.imgSrc} link={product.link}    />)}
        </div>
    );
}



export default function Geosyntheticspg() {
    return(
        <div className='flex flex-col justify-between'>
            <Navbar />
            <div className='w-full h-3/6 pt-36 pb-36 flex flex-col justify-center items center relative' style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className='text-5xl text-center font-extrabold pt-16 text-stone-50 m-auto relative z-10'>GeoSynthetics</p>
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className='w-full h-20'></div>
            <Grid products={products}/>

            <div className='w-full h-20'></div>
            <Footer />
        </div>
    );
}
