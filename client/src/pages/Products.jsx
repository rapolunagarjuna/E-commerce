import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import BlueBtn from '../components/BlueBtn';
import bgImg from '../assets/images/Products-BG.jpg';
import ProductGrid from '../components/ProductGrid';

export default function Products() {
    const navigate = useNavigate();
    return(
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            
            <div className='w-full h-3/6 pt-36 pb-36 flex flex-col justify-center items center relative' style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    
                <p className='m-16 text-center p-5 w-8/12 min-w-96 text-5xl sm:text-2xl text-stone-50 m-auto relative z-10'>Choose PAR Global for <b>reliable</b>, <b>high-quality</b> products across our geosynthetics, erosion control, industrial textiles, agro textiles, packaging textiles, and accessories</p>
                <div className='flex flex-col h-fit min-w-96 w-8/12 m-auto relative z-10'>
                    <p className='text-center w-full p-5 text-2xl sm:text-xl text-stone-50'>Contact us today to discuss your specific requirements and find the perfect solution for your project.</p>
                    <div className='flex w-full flex-row justify-end'>
                        <BlueBtn name={'Contact us'} func={()=>navigate('/contact')}/>
                    </div> 
                </div>
                <div className="absolute inset-0 bg-black opacity-40"></div>

            </div>
            
            <div className='mt-44  mb-44  text-4xl sm:text-xl text-center text-primary'>
                Our Products lineup are sustainable, reliable, high quality, and easy to use.
            </div>
            <ProductGrid />
            <Footer />
        </div>
    );
}