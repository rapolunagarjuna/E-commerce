import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from '../components/Footer';
import BlueBtn from "../components/BlueBtn";
import WhyChooseParSection from "../components/WhyChooseParSection";
import ProductDisplay from "../components/ProductDisplay";
import NewsEventSection from "../components/NewsEventSection";

export default function Home() {

  return (
    <div>
      <HeroSection/>
      <ProductDisplay/>
      <WhyChooseParSection />
      <NewsEventSection />
      <Footer />
    </div>
    
  );
}
