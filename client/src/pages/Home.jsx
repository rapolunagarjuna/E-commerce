import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from '../components/Footer';
import BlueBtn from "../components/BlueBtn";
import news from '../assets/images/news.jpg';

export default function Home() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />


      <div className="flex flex-row justify-center mt-12 mb-12 w-full h-96">
        <div className='bg-slate-300 w-3/12 h-full ml-1 mr-1'>
          <img className="w-full h-full object cover"  src={news}></img>
        </div>
        <div className='bg-slate-300 w-3/12 h-full ml-1 mr-1 p-10 text-slate-900 relative'>
          <p className="text-4xl mb-10">
            Geosynthetics Conference
          </p>
          <p className="text-xl ">Kansas City Convention Center </p>
          <p className="text-xl ">Kansas City, MO USA </p>
          <p className="text-xl " >Feb. 5-8, 2023</p>
          <div className="flex flex-row h-fit w-full justify-end absolute mb-10 mr-10 right-0 bottom-0">
            <BlueBtn name='Learn More'  func={()=>openInNewTab("https://exhibit.textiles.org/Geo23/Public/eBooth.aspx?IndexInList=0&FromPage=Exhibitors.aspx&ParentBoothID=&ListByBooth=true&BoothID=132974")}/>
          </div>
          
        </div>
      </div>

      <p></p>


      <Footer className='self-end mt-auto'/>
    </div>
  );
}
