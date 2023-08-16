import GreenBtn from "../../GreenBtn";
import { useState, } from "react";
import Cookies from "js-cookie";
import { BACKEND_URL } from "../../../../config.js";
import {IoMdClose } from "react-icons/io";


export default function AddProductForm({ visible, onClose }) {
    const [loading, setLoading] = useState(false);
    const [productCode, setProductCode] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dimensionValues, setDimensionValues] = useState([]);
    const [category, setCategory] = useState("");
    const [noOfDimensions, setNoOfDimensions] = useState(0);
    const [image, setImage] = useState(null);
  
    if (!visible) {
      return null;
    }
  
    const handleClick = () => {
      setLoading(true);
      if (
        productCode === "" ||
        name === "" ||
        description === "" ||
        dimensionValues === null ||
        category === "" ||
        image === null
      ) {
        alert("Cannot have empty fields");
        setLoading(false);
      }
  
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("productCode", productCode);
      productData.append("image", image);
      productData.append("category", category);
      productData.append("dimensions", dimensionValues);
  
      const token = Cookies.get("token");
      fetch(BACKEND_URL + "/api/admin/products?token=" + token, {
        method: "POST",
        body: productData,
      })
        .then((response) => {setLoading(false); onClose();})
        .catch((error) => console.error(error));
    };
  
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-5 flex items-center justify-center">
        <div className="bg-slate-100 opacity-100 w-5/12 h-4/5 overflow-y-auto p-6 z-10 shadow-xl">
          {/* Your form content */}
          <div className="flex flex-row justify-end">
            <h2 className="text-2xl text-primary text-center font-semibold mb-4 w-full">
              Add Product
            </h2>
            <IoMdClose
              size={30}
              className="hover:cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="text-primary text-xl mt-3 mb-3">
            <p className="my-2">Product Code</p>
            <input
              className="p-2 border border-primary my-2 w-full"
              type="text"
              placeholder="Enter product code here"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
            />
            <p className="my-2">Category</p>
            <input
              className="p-2 border border-primary my-2 w-full"
              type="text"
              placeholder="Enter category name here"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
  
            <p className="my-2">Product Name</p>
            <input
              className="p-2 border border-primary my-2 w-full"
              type="text"
              placeholder="Enter product name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
  
            <p className="my-2">Description</p>
            <input
              className="p-2 border border-primary my-2 w-full"
              type="text"
              placeholder="Enter description here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
  
            <p className="my-2">Dimensions</p>
            <input
              type="number"
              placeholder="Enter the number of dimensions here"
              className="p-2 border border-primary my-2 w-full"
              value={noOfDimensions}
              onChange={(e) => {
                const newNoOfDimensions = parseInt(e.target.value, 10);
                setNoOfDimensions(newNoOfDimensions);
                setDimensionValues((prevValues) => {
                  const newValues = [...prevValues];
                  while (newValues.length > newNoOfDimensions) {
                    newValues.pop();
                  }
                  while (newValues.length < newNoOfDimensions) {
                    newValues.push("");
                  }
                  return newValues;
                });
              }}
            />
            {dimensionValues.map((value, index) => (
              <div key={index} className="pl-10">
                <p className="my-2">Dimension {index + 1}</p>
                <input
                  type="text"
                  placeholder={`Enter dimension ${index + 1}`}
                  className="p-2 border border-primary my-2 w-full"
                  value={dimensionValues[index]}
                  onChange={(e) => {
                    const newDimensionValues = [...dimensionValues];
                    newDimensionValues[index] = e.target.value;
                    setDimensionValues(newDimensionValues);
                  }}
                />
              </div>
            ))}
            <p className="my-2">Image</p>
            <input
              type="file"
              accept="image/*"
              className="p-2 border border-primary my-2 w-full"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="flex flex-row justify-end w-full">
            <GreenBtn name="Save" loading={loading} func={handleClick} />
          </div>
        </div>
      </div>
    );
  }