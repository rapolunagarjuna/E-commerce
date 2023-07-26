import React from "react";
import image from "../assets/images/agro-textiles/AGRI-LINERS.webp";
import image1 from "../assets/images/agro-textiles/AGRICULTURE-BARN-CURTAIN.webp";
import { useNavigate } from "react-router-dom";

function ProductCard({ image, heading, description, link }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <img src={image} alt={heading} className="w-full h-auto" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-2">{heading}</h3>
        <p className="text-black mb-4">{description}</p>
        <p
          className="text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 text-right text-green-700 hover:text-red-700 cursor-pointer"
          onClick={() => {
            navigate(link, { replace: true });
          }}
        >
          Discover more
        </p>
      </div>
    </div>
  );
}

function ProductDisplay() {
  return (
    <div>
      <div className="w-full flex flex-row" style={{ height: "500px" }}>
        <div className="w-1/2 bg-white flex flex-col justify-center  text-xl p-16">
          <h3 className="text-3xl font-bold mb-4">Woven Coated PE Geo-Membrane</h3>
          <p>
          Medium to Heavy weight woven coated Polyethylene with an additional laminated film on the backside
          </p>
          <p
            className="text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 mt-5 text-right text-green-700 hover:text-red-700 cursor-pointer"
            onClick={() => {
              navigate("/product1", { replace: true });
            }}
          >
            Discover more
          </p>
        </div>
        <div className="w-1/2">
          <img
            src={image}
            alt="Product 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full flex flex-row" style={{ height: "500px" }}>
        <div className="w-1/2">
          <img
            src={image1}
            alt="Product 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 bg-white flex flex-col justify-center text-xl p-16">
          <h3 className="text-3xl font-bold mb-4">Slit Fence</h3>
          <p>For applications in construction industries, paved/unpaved roadways, haul roads for logging/landfills, temporary construction entrances, etc.
          </p>
          <p
            className="text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 mt-5 text-right text-green-700 hover:text-red-700 cursor-pointer"
            onClick={() => {
              navigate("/product2", { replace: true });
            }}
          >
            Discover more
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
