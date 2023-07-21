import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

// Sample product images (Replace these with your actual product images)
import image from '../assets/images/geosynthetics/SILT-FENCE.webp'
import image1 from '../assets/images/geosynthetics/WOVEN GEOTEXTILE.webp'
import image2 from '../assets/images/geosynthetics/PAVING -RETENTION GRID.webp'
import image3 from '../assets/images/geosynthetics/WIREBACK_SILT_FENCE.webp'
import image4 from '../assets/images/geosynthetics/SAFETY FENCE.webp'
import image5 from '../assets/images/geosynthetics/NON-WOVEN-GEOTEXTILE.webp'
import image6 from '../assets/images/erosion-control/SAND BAGS.webp'
import image7 from '../assets/images/erosion-control/DEWATERINGBAGS.webp'
import image8 from '../assets/images/erosion-control/GABIONS.webp'
import image9 from '../assets/images/erosion-control/COIRS.webp'
import image10 from '../assets/images/erosion-control/JUTE-BURLAP.webp'
import image11 from '../assets/images/industrial-textiles/POLY LINERS.webp'
import image12 from '../assets/images/industrial-textiles/WOVEN COATED PE GEO-MEMBRANE.webp'
import image13 from '../assets/images/industrial-textiles/ROOF-UNDERLAYMENT.webp'
import image14 from '../assets/images/industrial-textiles/TARPS.webp'
import image15 from '../assets/images/industrial-textiles/HOUSE WRAP.webp'
import image16 from '../assets/images/industrial-textiles/LUMBER-WRAP.webp'
import image17 from '../assets/images/packaging-textiles/CONTAINER LINERS.webp'
import image18 from '../assets/images/packaging-textiles/BOPP BAGS.webp'
import image19 from '../assets/images/packaging-textiles/DUNNAGE BAGS.webp'
import image20 from '../assets/images/packaging-textiles/BULK BAGS-SMALL BAGS.webp'
import image21 from '../assets/images/agro-textiles/AGRI-LINERS.webp'
import image22 from '../assets/images/agro-textiles/AGRICULTURE-BARN-CURTAIN.webp'
import image23 from '../assets/images/agro-textiles/COMPOSITE-LANDSCAPE-FABRIC.webp'
import image24 from '../assets/images/agro-textiles/POLYSPUN-LANDSCAPE-FABRIC.webp'
import image25 from '../assets/images/agro-textiles/NETTINGS.webp'
import image26 from '../assets/images/agro-textiles/FROST-PROTECTION.webp'

// Add more product images as needed
export default function Dashboard() {
    // Sample product data (Replace these with your actual product data)
    const products = [
      {
        id: 1,
        image: image,
        title: 'SILT-FENCE',
        rating: 4.5,
        availability: true,
      },
      {
        id: 2,
        image: image1,
        title: 'WOVEN GEOTEXTILE',
        rating: 3.8,
        availability: false,
      },
      // Add more product data as needed
      {
        id: 3,
        image: image2,
        title: 'PAVING - RETENTION GRID',
        rating: 4.2,
        availability: true,
      },
      {
        id: 4,
        image: image3,
        title: 'WIREBACK_SILT_FENCE',
        rating: 4.8,
        availability: true,
      },
      {
        id: 5,
        image: image4,
        title: 'SAFETY FENCE',
        rating: 3.7,
        availability: true,
      },
      {
        id: 6,
        image: image5,
        title: 'NON-WOVEN-GEOTEXTILE',
        rating: 4.1,
        availability: false,
      },
      {
        id: 7,
        image: image6,
        title: 'SAND BAGS',
        rating: 4.1,
        availability: false,
      },
      {
        id: 8,
        image: image7,
        title: 'DEWATERINGBAGS',
        rating: 4.1,
        availability: false,
      },
      {
        id: 9,
        image: image8,
        title: 'GABIONs',
        rating: 4.1,
        availability: false,
      },
      {
        id: 10,
        image: image9,
        title: 'COIRS',
        rating: 4.1,
        availability: false,
      },
      
      
      {
        id: 11,
        image: image10,
        title: 'JUTE-BURLAP',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 12,
        image: image11,
        title: 'POLY LINERS',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 13,
        image: image12,
        title: '/WOVEN COATED PE GEO-MEMBRANE',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 14,
        image: image13,
        title: 'ROOF-UNDERLAYMENT',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 15,
        image: image14,
        title: 'TARPS',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 16,
        image: image15,
        title: 'HOUSE WRAP',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 17,
        image: image16,
        title: 'LUMBER-WRAP',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 18,
        image: image17,
        title: 'CONTAINER LINERS',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 19,
        image: image18,
        title: 'BOPP BAGS',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 20,
        image: image19,
        title: 'DUNNAGE BAGS',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 21,
        image: image20,
        title: 'BULK BAGS-SMALL BAGS',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 22,
        image: image21,
        title: 'AGRI-LINERS',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 23,
        image: image22,
        title: 'AGRICULTURE-BARN-CURTAIN',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 24,
        image: image23,
        title: 'COMPOSITE-LANDSCAPE-FABRIC',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 25,
        image: image24,
        title: 'POLYSPUN-LANDSCAPE-FABRIC',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 26,
        image: image25,
        title: 'NETTINGS',
         
        rating: 4.1,
        availability: false,
      },
      
      {
        id: 27,
        image: image26,
        title: 'FROST-PROTECTION',
         
        rating: 4.1,
        availability: false,
      },


    ];
  
    return (
      <div>
        <Navbar />
        <div className="flex justify-between mx-8 mt-4">
          {/* Filter dropdown */}
          <div className="flex items-center">
            <span>Filter:</span>
            <select className="ml-2 p-2 rounded border">
              <option value="popular">Popular</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="highest">Highest to Lowest</option>
            </select>
          </div>
  
          {/* Cart button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Cart
          </button>
        </div>
  
        {/* Number of products and availability */}
        <div className="mx-8 mt-2 flex justify-between items-center">
          <div>{products.length} Products</div>
          <div className="bg-green-200 p-2 rounded">
            Available in stock
          </div>
        </div>
  
        {/* Product listing */}
        <div className="flex flex-wrap justify-center mt-8 mx-8">
          {products.map((product) => (
            <div key={product.id} className="w-1/3 p-4">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
              <div className="mt-2">{product.title}</div>
              <div className="text-yellow-500">Rating: {product.rating}</div>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
  
        <Footer />
      </div>
    );
  }