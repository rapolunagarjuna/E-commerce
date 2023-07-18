import Navbar from "../components/NavBar";
<<<<<<< HEAD
import HeroSection from "../components/HeroSection";

=======
import Footer from "../components/Footer";
import homeIMG from '../assets/images/home-page-img1.jpg';
>>>>>>> origin

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
<<<<<<< HEAD
      <HeroSection />
      <div className="flex flex-row justify-center mt-12 mb-12 w-full h-96">
        <div className='bg-slate-300 w-3/12 h-full ml-1 mr-1'>
          <img></img>
        </div>
        <div className='bg-slate-300 w-3/12 h-full ml-1 mr-1'>

=======
      <div className="h-screen flex items-center justify-center">
        <img className="h-auto max-w-full w-64" src={homeIMG} alt="home-page-image" />
        <div className="absolute -mt-24 bg-slate-100 flex items-center justify-center w-3/6 h-98">
          <h1 className="text-2xl text-black">PAR Global</h1>
>>>>>>> origin
        </div>
      </div>
    </div>
  );
}
