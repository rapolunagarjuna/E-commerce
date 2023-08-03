import { useParams } from "react-router-dom";
import IndividualCategoryGrid from "../components/ProdGrid";

import bgImg from '../assets/images/geosynthetics.jpg';
import bgImg2 from '../assets/images/erosioncontrol.jpg';
import bgImg3 from '../assets/images/industrialtextiles.jpg';
import bgImg4 from '../assets/images/agrotextiles.jpg';
import bgImg5 from '../assets/images/packagingtextiles.jpg';
import bgImg6 from '../assets/images/accessories.jpg';
import image from '../assets/images/geosynthetics/SILT-FENCE.webp'
import image1 from '../assets/images/geosynthetics/WGEOTEXTILE.webp'
import image2 from '../assets/images/geosynthetics/PAVING.webp'
import image3 from '../assets/images/geosynthetics/WIREBACK.webp'
import image4 from '../assets/images/geosynthetics/SFENCE.webp'
import image5 from '../assets/images/geosynthetics/NWOVEN.webp'
import image6 from '../assets/images/erosion-control/SANDBAGS.webp'
import image7 from '../assets/images/erosion-control/DEWATERINGBAGS.webp'
import image8 from '../assets/images/erosion-control/GABIONS.webp'
import image9 from '../assets/images/erosion-control/COIRS.webp'
import image10 from '../assets/images/erosion-control/JUTE-BURLAP.webp'
import image11 from '../assets/images/industrial-textiles/POLYLINERS.webp'
import image12 from '../assets/images/industrial-textiles/WOVEN-COATED-PE-GEO-MEMBRANE.webp'
import image13 from '../assets/images/industrial-textiles/ROOF-UNDERLAYMENT.webp'
import image14 from '../assets/images/industrial-textiles/TARPS.webp'
import image15 from '../assets/images/industrial-textiles/HOUSEWRAP.webp'
import image16 from '../assets/images/industrial-textiles/LUMBER-WRAP.webp'
import image17 from '../assets/images/agro-textiles/AGRI-LINERS.webp'
import image18 from '../assets/images/agro-textiles/AGRICULTURE-BARN-CURTAIN.webp'
import image19 from '../assets/images/agro-textiles/COMPOSITE-LANDSCAPE-FABRIC.webp'
import image20 from '../assets/images/agro-textiles/POLYSPUN-LANDSCAPE-FABRIC.webp'
import image21 from '../assets/images/agro-textiles/NETTINGS.webp'
import image22 from '../assets/images/agro-textiles/FROST-PROTECTION.webp'
import image23 from '../assets/images/agro-textiles/WOVEN-GROUND-COVER.webp'
import image24 from '../assets/images/packaging-textiles/CONTAINERLINERS.webp'
import image25 from '../assets/images/packaging-textiles/BOPPBAGS.webp'
import image26 from '../assets/images/packaging-textiles/DUNNAGEBAGS.webp'
import image27 from '../assets/images/packaging-textiles/BULKBAGS-SMALLBAGS.webp'
import image28 from '../assets/images/accessories/ANCHORINGPINS.webp'
import image29 from '../assets/images/accessories/HOGRINGS.webp'
import image30 from '../assets/images/accessories/METAL-FENCES.webp'
import image31 from '../assets/images/accessories/SODSTAPLES-ROUNTTOPPINS.webp'
import image32 from '../assets/images/accessories/SPIKES.webp'
import image33 from '../assets/images/accessories/TPOST.webp'
import image34 from '../assets/images/accessories/WIRE_ROD.webp'
import image35 from '../assets/images/accessories/WOODSTAKES.webp'

const GS = {   
    title: 'Geosynthetics' ,
    backgroundImage: bgImg,
    products: [
        {
            name: 'Silt Fence', 
            imgSrc: image,
            description: "For applications in construction industries, paved/unpaved roadways, haul roads for logging/landfills, temporary construction entrances, etc. \n NTPEP Certified. \n Customizable color solutions manufactured on circular & sulzer looms. \n No fraying guareented. \n Available in slit tape & mono-filament. \n Width Available in 24”, 36”, 42” & 48 “. \n Customizable length. \n Offers 500 – 1000 hrs of UV enduring performance"
        },
        {
            name: 'Woven Geotextile',
            imgSrc: image1,
            description: ""
    
        },
        {   name: 'Paving / Retention Grid', 
            imgSrc: image2,
            description: ""
    
        },
        {   name: 'Wire Backed Slit Fence', 
            imgSrc: image3,
            description: ""
        },
        {   name: 'Safety Fence', 
            imgSrc: image4,
            description: ""
        },
        {   name: 'Non-Woven Geotextile', 
            imgSrc: image5,
            description: ""
        }
    ]
};

const EC = {   
    title: 'Erosion Control',
    backgroundImage: bgImg2,
    products: [
    {
        name: 'Sand Bags', 
        imgSrc: image6,
        link: '/sand_bags'
    },
    {
        name: 'Dewatering Bags', 
        imgSrc : image7,
        link: '/dewatering_bags'
    },
    {
        name: 'Gabions',
        imgSrc: image8,
        link: '/gabions'
    },  
    {
        name: 'Coir',
        imgSrc: image9,
        link: '/coir'
    },
    {
        name: 'Jute Burlap',
        imgSrc: image10,
        link: '/jute_burlap'
    }
    
    ]
    };

const IT = { 
        title: 'Industrial Textiles',
        backgroundImage: bgImg3,
        products : [ 
        {
            name: 'Poly-Liners',
            imgSrc: image11,
            link: '/poly_liners'
        },
        {
            name: 'Woven Coated PE Geo-Membrane',
            imgSrc: image12,
            link: '/woven_coated_pe_geo_membrane'
        },
        {
            name: 'Roof Underlayment',
            imgSrc: image13,
            link: '/roof_underlayment'
        },
        {
            name: 'Tarps / Covers',
            imgSrc: image14,
            link: '/tarps'
        },
        {
            name: 'House Wrap',
            imgSrc: image15,
            link: '/house_wrap'
        },
        {
            name: 'Lumber Wrap',
            imgSrc: image16,
            link: '/lumber_wrap'
        }
    ]
};

const AT = { 
    title: 'Agro-Textiles',
    backgroundImage: bgImg4,
    products :  [
        {
            name: 'Agri-Liners',
            imgSrc: image17,
            link: '/agri_liners'
        },
        {
            name: 'Agriculture Barn Curtain',
            imgSrc: image18,
            link: '/agriculture_barn_curtain'
        },
        {
        name: 'Composite Landscape Fabric ',
        imgSrc: image19,
        link: '/composite_landscape_fabric'
        },
        {
            name: 'Polyspun Landscape Fabric',
            imgSrc: image20,
            link: '/polyspun_landscape_fabric'
        },
        {
            name: 'Shade Nets',
            imgSrc: image21,
            link: '/shade_nets'
        },
        {
            name: 'Frost Protection',
            imgSrc: image22,
            link: '/frost_protection'
        },
        {
            name: 'Woven Ground Cover',
            imgSrc: image23,
            link: '/woven_ground_cover'
        }
    ]
};

const PT={
    title : "Packaging Textiles",
    backgroundImage : bgImg5,
    products: [
    {
        name: 'Container Liners',
        imgSrc: image24,
        link: '/container_liners'
    },
    {
        name: 'BOPP Bags',
        imgSrc: image25,
        link: '/bopp_bags'
    },
    {
        name: 'Dunnage Bags',
        imgSrc: image26,
        link: '/dunnage_bags'
    },
    {
        name: 'FIBC / Bulk Bags',
        imgSrc: image27,
        link: '/fibc_bulk_bags'
    }
]
};

const AC = {
    title : 'Accessories',
    imgSrc : bgImg6,
    products: [
        {
            name: 'Anchoring Pins',
            imgSrc: image28,
            link: '/anchoring_pins'
        },
        {
            name: 'Hogrings',
            imgSrc: image29,
            link: '/hogrings'
        },
        {
            name: 'Metal Fence',
            imgSrc: image30,
            link: '/metal_fence'
        },
        {
            name: 'Sodstaples / Rounttoppins',
            imgSrc: image31,
            link: '/sodstaples_rounttoppins'
        },
        {
            name: 'Spikes',
            imgSrc: image32,
            link: '/spikes'
        },
        {
            name: 'T-Post',
            imgSrc: image33,
            link: '/t_post'
        },
        {
            name: 'Wire Rod',
            imgSrc: image34,
            link: '/wire_rod'
        },
        {
            name: 'Woodstakes',
            imgSrc: image35,
            link: '/woodstakes'
        }
    ]
};

export default function Template() {

    const category = useParams().category;

    const renderProducts = () =>  {
        if (category === 'geosynthetics') {
            return <IndividualCategoryGrid category={GS} />
        } else if (category === 'erosion-control') {
            return <IndividualCategoryGrid category={EC} />
        }
        else if(category ==='industrial-textiles'){
            return <IndividualCategoryGrid category={IT} />
        } 
        else if(category == 'agro-textiles'){
            return <IndividualCategoryGrid category={AT} />
        }
        else if(category =='packaging-textiles'){
            return <IndividualCategoryGrid category={PT} />
        }
        else if(category ==='accessories'){
            return <IndividualCategoryGrid category={AC} />
        }else {
            return null;
        }
    }

    return (
        <>  
            {renderProducts()}
        </>
        
    );
}