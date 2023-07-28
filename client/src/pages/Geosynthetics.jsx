import ItemGrid from '../components/ItemGrid'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import image from '../assets/images/geosynthetics/SILT-FENCE.webp'
import image1 from '../assets/images/geosynthetics/WGEOTEXTILE.webp'
import image2 from '../assets/images/geosynthetics/PAVING.webp'
import image3 from '../assets/images/geosynthetics/WIREBACK.webp'
import image4 from '../assets/images/geosynthetics/SFENCE.webp'
import image5 from '../assets/images/geosynthetics/NWOVEN.webp'

const products = [
    {
        name: 'Silt Fence', 
        services : "We offer NTPEP certified customizable color solutions for applications in the construction industry, including paved and unpaved roadways, haul roads for logging and landfills, and temporary construction entrances.",
        prodspecs: " Our products are manufactured on circular and sulzer looms, ensuring no fraying. They are available in slit tape and mono-filament forms, with widths of '24\"', '36\"', '42\"', and '48\"' . The length can be customized according to customer requests. ",
        signele : "Our products provide UV endurance performance of 500-1000 hours, guaranteeing durability and longevity.",
        enq: 'For more techical information are available upon enquiry Geosynthetics',
        imgSrc: image

    },
    {
        name: 'Woven Geotextile',
        services: "For a wide range of applications, we offer NTPEP certified woven geotextile fabrics that provide road stabilization, ground stabilization, railroad support, aggregate separation, and erosion control.",
        prodspecs: "We provide customizable solutions in addition to our standard widths of 12.5', 15.0', and 17.5', as well as standard roll lengths of 258', 300', 309', 360', and 432'. This allows us to meet the specific requirements of different projects and applications.",
        signele: "Our geotextile fabrics are available in various strengths, including light to high strength, and are manufactured using PP (polypropylene) and PET (polyester) materials in slit tape, monofilament, and multi-filament forms.",
        enq: 'For more techical information are available upon enquiry Geosynthetics',
        imgSrc: image1
    },
    {   name: 'Paving / Retention Grid', 
        services: "For reinforcement of soil and granular materials in various applications such as pavements/roads, rail tracks, retaining walls, segmental walls, steep slopes, etc., we offer high strength fiber glass and polyester grids.",
        prodspecs: ' Our products are Cost Effective, Easy to install, UV resistant, High tensile strength, Occlusive force, Low elongation',
        signele: "Our grids are designed with a modular design, enabling superior connection and ensuring efficient performance in diverse projects.",
        enq: 'For more techical information are available upon enquiry Geosynthetics',
        imgSrc: image2
    },
    {   name: 'Wire Backed Slit Fence', 
        services: " We offer woven silt fences in two options: 70 gsm and 100 gsm, and non-woven silt fences in 6 oz weight.",
        prodspecs: 'We offer a wide variety of specifications in our products like Customizable solutions manufactured on circular & sulzer looms, are available in widths of 24", 36", and 42 and lenghts are customizable as per customer request and GI wire mesh available in 12.5 and 14 gauge with 2"x4" and 4"x4" openings',
        signele: "This concise version highlights the key information about the silt fences, including their woven and non-woven options, available weights, customizable solutions, width and length options, and the GI wire mesh specifications.",
        enq: 'For more techical information are available upon enquiry Geosynthetics',
        imgSrc: image3
    },
    {   name: 'Safety Fence', 
        services: " Our safety fences are of excellent quality and come in various mesh styles including diamond, oval, square, and rectangular. These fences serve a wide range of applications such as construction barricades, snow fences, garden fences, yard fences, and deer/animal protective fences.",
        prodspecs: 'Our product specifiactions are UV resistant, Designed based on specific applications, High strength, Cost-effective',
        signele: "We also offer customizable color and size solutions to meet individual requirements. This ensures that our safety fences not only provide optimal functionality but also cater to personal preferences and project needs.",
        enq: 'For more techical information are available upon enquiry Geosynthetics',
        imgSrc: image4 
    },
    {   name: 'Non-Woven Geotextile', 
        services: "Our non-woven geotextile fabric is designed for a wide range of applications including sub-surface drainage systems, separation and stabilization in road and railway projects, cushioning, construction, and filtration/separation applications.",
        prodspecs: 'Our product features are : NTPEP Certified, Available in both Polypropylene and Polyester Staple Fibres, Customizable solutions offered, Standard roll lengths: 12.5x360 and 15x300, idths available up to 19 feet',
        signele: " Our product is very reliable and long lasting",
        enq: 'For more techical information are available upon enquiry Geosynthetics', 
        imgSrc: image5 
    }
]

export default function Geosynthetics() {
    return(
        <>
            <Navbar />
            <div ></div>
            
            <p className='text-5xl text-center font-extrabold pt-16'>GeoSynthetics</p>
            <ItemGrid products={products} />
            <Footer />
        </>
    );
}

