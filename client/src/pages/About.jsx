import Navbar from "../components/NavBar";
import Footer from '../components/Footer';
import HeadSection from "../components/HeadSeaction";

import aboutImage from "../assets/images/about.jpg";
import image1 from "../assets/images/about1.jpg";

export default function About() {


  return (
    <div className="flex flex-col justify-center items-center ">
    <Navbar />
    <HeadSection heading="About Us" imgSrc={aboutImage}/>

    <div className="w-full flex flex-row" style={{height:'500px'}}>
      <div className="w-1/2 "><img src={image1} alt="about" className="w-full h-full object-contain object-center" /></div>
      <div className="w-1/2 bg-primary flex flex-col justify-center text-stone-50 text-3xl p-16"><p>PAR Global, headquartered in Georgia-USA, is your one-stop solution for high-quality synthetic and natural fibre textiles, industrial and retail packaging products, chemicals, steel, and related accessories.</p></div>
    </div>

    

    <Footer />
    </div>
  );
}
