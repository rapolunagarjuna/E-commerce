import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from '../components/Footer';
import WhyChooseParSection from "../components/WhyChooseParSection";
import ProductDisplay from "../components/ProductDisplay";
import NewsEventSection from "../components/NewsEventSection";

export default function Home() {

  return (
    <div>
      <NavBar />
      <HeroSection/>
      <ProductDisplay/>
      <WhyChooseParSection />
      <NewsEventSection />
      <Footer />
    </div>
    
  );
}
