import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import homeIMG from '../assets/images/home-page-img1.jpg';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <img className="h-auto max-w-full w-64" src={homeIMG} alt="home-page-image" />
        <div className="absolute -mt-24 bg-slate-100 flex items-center justify-center w-3/6 h-98">
          <h1 className="text-2xl text-black">PAR Global</h1>
        </div>
      </div>
    </div>
  );
}
