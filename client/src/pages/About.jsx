import Navbar from "../components/NavBar";
import Footer from '../components/Footer';
import aboutimage from "../assets/images/aboutus.jpg";
import m1image from "../assets/images/m1image.jpg";

export default function About() {
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
    <div className="flex flex-col min-h">
    <Navbar />
    <div className="flex flex-col p-8">
        <div className="bg-blue-100 p-8 rounded flex">
          <img src={aboutimage} className="w-106 h-96 mr-4 " alt="About Us" />
        <div>
          <h2 style={{ fontWeight: 'bold', fontSize: '40px', paddingBottom: '20px' }}>Dedicated to serving our clients</h2>
          <div className="text-l">
            PAR Global, headquartered in Georgia-USA, is a one-stop manufacturing solution and service provider for Best in Class Synthetic and Natural fiber textiles, Industrial and Retail Packaging products, Chemicals, Steel, and related Accessories. With over 100 years of combined experience and success in manufacturing, marketing, and sales, we bring world-class products to you as a partner in your success to build a partnership that lasts for generations.
          </div>
          <div className="p-8 font-bold text-xl">
          Integrity, Ownership, Excellence, Passion and Customer Satisfaction are our core values.
            </div>
        </div>
    </div>



        <div className="bg-gray-200 p-8 rounded mt-4">
          <h2 className="font-bold text-xl p-4">What makes us successful?</h2>
          <ul className="list-disc pl-6">
            <li>Having multiple manufacturing facilities strategically located within India, which meets requirements of several international certification standards including ISO 9001 & 14001, Food Safety, AASHTO NTPEP and CE standards.</li>
            <li>Full range of products in segments such as erosion control, civil & environmental construction, landscaping, small & bulk packaging and industrial chemicals.</li>
            <li>Dedicated Technical services to assist customer in product selection, design and installation. Knowledgeable customer support department to cater to customer needs as they arise.</li>
            <li>Single platform order placement system powered by AI, for order placement and tracking facility.</li>
            <li>Innovative and modern supply chain management. Offering Consolidation Of Multiple Products On A Single Container.</li>
            <li>Ensuring that every raw material used in production every time is of high quality, combined with our in house stringent quality check and quality assurance capabilities means outstanding quality products.</li>
            <li>Customizable size, color and printing options available to meet any job specific requirements. Wide Width Products Offered In Folded Forms For Significant Savings On LTL Freights.</li>
          </ul>
        </div>

        <h2 style={{ fontWeight: 'bold', fontSize: '30px', padding: "25px "}}>Meet the Team</h2>
        <div className="flex">
          {teamMembers.map((member) => (
            <div key={member.name} className="w-1/6 p-6">
              <img src={m1image} alt={`Team Member ${member.name}`} className="w-48 h-48" />
              <h5 style={{ fontWeight: 'bold'}} >{member.name}</h5>
              <p>{member.designation}</p>
              <p>{member.email}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer className='self-end mt-auto' />
    </div>
  );
}
