import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <HeroSection />
      <div className="flex flex-row justify-center mt-12 mb-12 w-full h-96">
        <div className='bg-slate-300 w-3/12 h-full ml-1 mr-1'>
          <img></img>
        </div>
        <div className='bg-slate-300 w-3/12 h-full ml-1 mr-1'>

        </div>
      </div>
      <Footer />
    </div>
  );
}
