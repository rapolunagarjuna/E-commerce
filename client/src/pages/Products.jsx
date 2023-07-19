import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid';
import BlueBtn from '../components/BlueBtn';


export default function Products() {
    const navigate = useNavigate();
    return(
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            
            <p className='m-16 text-center p-5 w-8/12 min-w-96 text-5xl text-slate-900'>Choose PAR Global for <b>reliable</b>, <b>high-quality</b> products across our geosynthetics, erosion control, industrial textiles, agro textiles, packaging textiles, and accessories</p>
            <div className='flex flex-col h-fit min-w-96'>
                <p className='text-center p-5 text-2xl text-slate-900'>Contact us today to discuss your specific requirements and find the perfect solution for your project.</p>
                <div className='flex flex-row justify-end'>
                    <BlueBtn name={'Contact us'} func={()=>navigate('/contact')}/>
                </div> 
            </div>
            
            <ProductGrid />
            <Footer />
        </div>
    );
}