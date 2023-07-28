import { useNavigate } from 'react-router-dom'
import NavBarMain from './NavBarMain';
import Footer from './Footer'


// import image from '../assets/images/geosynthetics/SILT-FENCE.webp'
// import image1 from '../assets/images/geosynthetics/WGEOTEXTILE.webp'
// import image2 from '../assets/images/geosynthetics/PAVING.webp'
// import image3 from '../assets/images/geosynthetics/WIREBACK.webp'
// import image4 from '../assets/images/geosynthetics/SFENCE.webp'
// import image5 from '../assets/images/geosynthetics/NWOVEN.webp'
// import image6 from '../assets/images/erosion-control/SANDBAGS.webp'
// import image7 from '../assets/images/erosion-control/DEWATERINGBAGS.webp'
// import image8 from '../assets/images/erosion-control/GABIONS.webp'
// import image9 from '../assets/images/erosion-control/COIRS.webp'
// import image10 from '../assets/images/erosion-control/JUTE-BURLAP.webp'
// import image11 from '../assets/images/industrial-textiles/POLYLINERS.webp'
// import image12 from '../assets/images/industrial-textiles/WOVEN-COATED-PE-GEO-MEMBRANE.webp'
// import image13 from '../assets/images/industrial-textiles/ROOF-UNDERLAYMENT.webp'
// import image14 from '../assets/images/industrial-textiles/TARPS.webp'
// import image15 from '../assets/images/industrial-textiles/HOUSEWRAP.webp'
// import image16 from '../assets/images/industrial-textiles/LUMBER-WRAP.webp'
// import image17 from '../assets/images/agro-textiles/AGRI-LINERS.webp'
// import image18 from '../assets/images/agro-textiles/AGRICULTURE-BARN-CURTAIN.webp'
// import image19 from '../assets/images/agro-textiles/COMPOSITE-LANDSCAPE-FABRIC.webp'
// import image20 from '../assets/images/agro-textiles/POLYSPUN-LANDSCAPE-FABRIC.webp'
// import image21 from '../assets/images/agro-textiles/NETTINGS.webp'
// import image22 from '../assets/images/agro-textiles/FROST-PROTECTION.webp'
// import image23 from '../assets/images/agro-textiles/WOVEN-GROUND-COVER.webp'
// import image24 from '../assets/images/packaging-textiles/CONTAINERLINERS.webp'
// import image25 from '../assets/images/packaging-textiles/BOPPBAGS.webp'
// import image26 from '../assets/images/packaging-textiles/DUNNAGEBAGS.webp'
// import image27 from '../assets/images/packaging-textiles/BULKBAGS-SMALLBAGS.webp'




// const products = [(
//     {
//         name: 'Silt Fence', 
//         imgSrc: image,
//         link: '/silt-fence'
//     },
//     {
//         name: 'Woven Geotextile',
//         imgSrc: image1,
//         link: '/woven_geotextile'

//     },
//     {   name: 'Paving / Retention Grid', 
//         imgSrc: image2,
//         link: '/paving_retention'

//     },
//     {   name: 'Wire Backed Slit Fence', 
//         imgSrc: image3,
//         link: '/wire_backed_slit_fence'
//     },
//     {   name: 'Safety Fence', 
//         imgSrc: image4,
//         link: '/safety_fence'
//     },
//     {   name: 'Non-Woven Geotextile', 
//         imgSrc: image5,
//         link: '/non_woven_geotextile'
//     }),(
//         {
//             name: 'Sand Bags', 
//             imgSrc: image6,
//             link: '/sand_bags'
//         },
//         {
//             name: 'Dewatering Bags', 
//             imgSrc : image7,
//             link: '/dewatering_bags'
//         },
//         {
//             name: 'Gabions',
//             imgSrc: image8,
//             link: '/gabions'
//         },  
//         {
//             name: 'Coir',
//             imgSrc: image9,
//             link: '/coir'
//         },
//         {
//             name: 'Jute Burlap',
//             imgSrc: image10,
//             link: '/jute_burlap'
//         }
//     ),( 
//         {
//             name: 'Poly-Liners',
//             imgSrc: image11,
//             link: '/poly_liners'
//         },
//         {
//             name: 'Woven Coated PE Geo-Membrane',
//             imgSrc: image12,
//             link: '/woven_coated_pe_geo_membrane'
//         },
//         {
//             name: 'Roof Underlayment',
//             imgSrc: image13,
//             link: '/roof_underlayment'
//         },
//         {
//             name: 'Tarps / Covers',
//             imgSrc: image14,
//             link: '/tarps'
//         },
//         {
//             name: 'House Wrap',
//             imgSrc: image15,
//             link: '/house_wrap'
//         },
//         {
//             name: 'Lumber Wrap',
//             imgSrc: image16,
//             link: '/lumber_wrap'
//         }
//     ),(
//         {
//             name: 'Agri-Liners',
//             imgSrc: image17,
//             link: '/agri_liners'
//         },
//         {
//             name: 'Agriculture Barn Curtain',
//             imgSrc: image18,
//             link: '/agriculture_barn_curtain'
//         },
//         {
//         name: 'Composite Landscape Fabric ',
//         imgSrc: image19,
//         link: '/composite_landscape_fabric'
//         },
//         {
//             name: 'Polyspun Landscape Fabric',
//             imgSrc: image20,
//             link: '/polyspun_landscape_fabric'
//         },
//         {
//             name: 'Shade Nets',
//             imgSrc: image21,
//             link: '/shade_nets'
//         },
//         {
//             name: 'Frost Protection',
//             imgSrc: image22,
//             link: '/frost_protection'
//         },
//         {
//             name: 'Woven Ground Cover',
//             imgSrc: image23,
//             link: '/woven_ground_cover'
//         }
//     ),(
//         {
//             name: 'Container Liners',
//             imgSrc: image24,
//             link: '/container_liners'
//         },
//         {
//             name: 'BOPP Bags',
//             imgSrc: image25,
//             link: '/bopp_bags'
//         },
//         {
//             name: 'Dunnage Bags',
//             imgSrc: image26,
//             link: '/dunnage_bags'
//         },
//         {
//             name: 'FIBC / Bulk Bags',
//             imgSrc: image27,
//             link: '/fibc_bulk_bags'
//         }
//     )

// ]



function Item({name, imgSrc, link}) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col w-full h-96 justify-end' onClick={()=>navigate(link)}
             style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} >
            <div className='flex h-16 flex-col justify-center w-full  text-center bg-secondary bg-opacity-50  text-xl text-primary '>
                <span>{name}</span>
                
            </div>
        </div>
    )
}

function Grid({products}) {
    return(
        <div className='grid mx-auto 2xl:w-9/12 2xl:grid-cols-3  w-10/12 xl:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-16 pb-44 place-items-start'>
            {products.map(product => <Item name={product.name} imgSrc={product.imgSrc} link={product.link}    />)}
        </div>
    );
}



export default function IndividualCategoryGrid({category}) {


    return(
        <div className='flex flex-col justify-between'>
            <NavBarMain />
            <div className='w-full h-3/6 pt-36 pb-36 flex flex-col justify-center items center relative' style={{backgroundImage: `url(${category.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <p className='text-5xl text-center font-extrabold pt-16 text-stone-50 m-auto relative z-10'>{category.title}</p>
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            <div className='my-20'></div>

            <Grid products={category.products}/>

            
            <Footer />
        </div>
    );
}
