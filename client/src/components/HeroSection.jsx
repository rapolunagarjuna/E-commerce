import homeIMG from '../assets/images/home-page-img1.jpg';


export default function HeroSection() {
    return(
        <div className="flex flex-row justify-center h-auto w-full ">
        <div className="relative flex flex-col w-6/12 h-4/6">
            <img src={homeIMG} alt='home-bg-image'/>
            <div className="absolute flex flex-col items-center justify-center inset-x-0 bottom-0 w-full h-auto">
                <div className="bg-slate-100 w-9/12 h-full p-10">
                    <p className="font-bold text-2xl text-slate-900">PAR GLOBAL</p>
                    <p className="text-xl text-slate-900 mt-5 max-h-44 overflow-auto">
                        We are one stop manufacturing 
                        solution and service provider for Best in Class Synthetic and Natural 
                        fibre textiles, Industrial and Retail Packaging products, Chemicals, 
                        Steel and related Accessories. With over 100 years of 
                        combined experience and success in manufacturing, 
                        marketing and sales, we bring world class products to you as 
                        a partner in your success to build a partnership that lasts for 
                        generations.
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
}