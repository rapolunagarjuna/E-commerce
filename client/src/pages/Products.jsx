import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import BlueBtn from '../components/BlueBtn';
import bgImg from '../assets/images/Products-BG.jpg';
import ProductGrid from '../components/ProductGrid';

export default function Products() {
    const navigate = useNavigate();
    return(
        <div className='flex  flex-col justify-center items-center'>
            <Navbar />
            
            <div className='w-full flex flex-col justify-center items-center relative' style={{backgroundImage: `url(${bgImg})`, height:'800px' , backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    
                <p className='text-center  h-fit w-8/12 min-w-96 text-6xl text-stone-50 z-10' style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.6)" }}>Sustainable, Reliable & High-Quality products</p>                
                
                <div className='flex flex-col h-fit min-w-96 w-6/12 z-10'>
                    <p className='text-center w-full p-5 text-2xl sm:text-xl text-stone-50'>Choose PAR Global for <b>reliable</b>, <b>high-quality</b> products across our geosynthetics, erosion control, industrial textiles, agro textiles, packaging textiles, and accessories. Contact us today to discuss your specific requirements and find the perfect solution for your project.</p>
                    <div className='flex mt-5 w-full flex-row justify-center'>
                        <BlueBtn name={'Contact us'} func={()=>navigate('/contact')}/>
                    </div> 
                </div>

                <div className="absolute inset-0 bg-black opacity-40"></div>

            </div>
            
            <ProductGrid />
            <Footer />
        </div>
    );
}