import Navbar from "../components/NavBar";
import Footer from '../components/Footer';
import aboutimage from "../assets/images/aboutus.jpg";
import m1image from "../assets/images/m1image.jpg";
import BlueBtn from "../components/BlueBtn";
import { useNavigate } from "react-router-dom";
import innovativeImg from '../assets/images/innovative.png';




export default function About() {
  const navigate = useNavigate();


  const values = [{
    title: "Passion",
    image: passion,
  },{
    title: "Integrity",
    image: integrity,
  }, {
    title: "Excellence",
    image: excellence,
  }, {
    title: "Cutomer Satisfaction",
    image: customerSatisfaction,
  }
  ]


  const teamMembers = [
    { name: "Yogi Parikh", designation: "President", email: "yogi@parglobal.us" },
    { name: "Monte Thomas", designation: "Vice President", email: "mthomas@parglobal.us" },
    { name: "Marshall Gaddy", designation: "Quality Control Manager", email: "mgaddy@parglobal.us" },
    { name: "Raj Gadhavi", designation: "Business Development", email: "rgadhavi@parglobal.us" },
    { name: "Bharat Gandhi", designation: "Finance Controller", email: "accounts@parglobal.us" },
    { name: "Anokhi Parikh", designation: "Marketing & Events Coordinator", email: "aparikh@parglobal.us" },
    // Add more team members here
  ];

  return (
    <div className="flex flex-col justify-center items-center ">
    <Navbar />

    <div className='flex flex-col w-full justify-end' style={{backgroundImage: `url(${coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'700px'}}>
        {/* <img src={coverImage} className='w-full h-full object-cover ' ></img> */}
        <p className="z-10 text-teal-400 text-7xl font-black p-16 "> Redefining manufacting at PAR Global </p>
    </div>



    {/* top section */}
    <div className=" flex flex-col p-8 justify-center items-center mt-20 mb-20">
      <h2 className="w-full text-center leading-normal" style={{fontWeight: 'bold', fontSize: '50px', paddingBottom: '20px' }}>Dedicated to serving our clients</h2>
        
        <div className="w-6/12 bg-slate-200 p-8 flex flex-row justify-center ">
          
            <img src={aboutimage} className="w-6/12 mr-4 " alt="About Us" />
            
            <div className="w-6/12 w-full min-w-96 h-fit">
              <div className="text-xl flex flex-col p-10">
                <div className="w-fit text-2xl">
                  PAR Global, headquartered in Georgia-USA, is a one-stop manufacturing solution and service provider for Best in Class Synthetic and Natural fiber textiles, Industrial and Retail Packaging products, Chemicals, Steel, and related Accessories. With over 100 years of combined experience and success in manufacturing, marketing, and sales, we bring world-class products to you as a partner in your success to build a partnership that lasts for generations.
                </div>   
              </div>
            
            </div>
          
          
        </div>



        <div className="w-5/12 min-w-96 h-fit m-10 p-14 bg-slate-200 mt-20 mb-20">
          <div className="w-full text-5xl text-center font-bold">Strategically Located Facilities</div>
          <div className="w-full h-fit pt-5 flex flex-row">
            <div className="text-2xl w-6/12 mr-8">
              Our multiple manufacturing facilities scattered throughout India meet and surpass international 
              certification standards, including ISO 9001 & 14001, 
              Food Safety, AASHTO NTPEP, and CE.
            </div>
            <div className="text-2xl w-6/12">
              Our multiple manufacturing facilities scattered 
              throughout India meet and surpass international 
              certification standards, including ISO 9001 & 14001, 
              Food Safety, AASHTO NTPEP, and CE.
            </div>
          </div>
          
        </div>


        <div className="w-full h-fit p-10 items-center justify-center bg-blue-200 relative mt-20 mb-20" 
              style={{backgroundImage: `url(${innovativeImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="w-6/12 items-center justify-center m-auto relative z-10">
                  <div className="text-shadow text-6xl text-stone-200 text-center font-bold p-16">Innovative Supply Chain</div>
                  <div className="text-shadow text-4xl text-stone-200 pb-16">
                      We pride ourselves on our innovative and modern approach to supply chain management. By offering consolidation of multiple products on a single container, we provide our customers with streamlined logistics solutions, ensuring that their orders are delivered efficiently and cost-effectively.
                  </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>


        {/* core values */}

        <p className="mt-16 mb-16 text-5xl font-bold slate-900 text-center">
          Our Core Values
        </p>
        <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center ">
                <img className="h-96 w-96 object-cover object-center "  src={value.image} alt={value.name} />
                <h2 className="text-xl text-slate-900 font-bold mt-4 ">{value.name}</h2>
              </div>
            ))}
        </div>





        <h2 style={{ fontWeight: 'bold', fontSize: '40px', padding: "25px "}}>Meet Our Team</h2>
        <div className="flex">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col rounded-lg w-fit h-fit items-center justify-center p-6 hover:bg-slate-100">
              <img src={m1image} alt={`Team Member ${member.name}`} className="w-36 h-36" />
              <h5 style={{ fontWeight: 'bold'}} >{member.name}</h5>
              <p>{member.designation}</p>
              <p>{member.email}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-3/12 min-w-96 mt-20 mb-36">
        <div className="p-10 text-4xl text-center font-bold">
          Get started
        </div>
        <div className="text-xl text-center pb">
          Achieve success with our cutting-edge manufacturing capabilities. Embark on your next project with the assurance of outstanding quality products and unparalleled service.
        </div>
        <div className="mt-10 flex flex-row items-center justify-center">
          <BlueBtn name='Contact us' func={()=>navigate('/contact',{replace:true})} />
        </div>
        
      </div>

      <Footer className='self-end mt-auto' />
    </div>
  );
}
