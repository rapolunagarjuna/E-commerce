import GreenBtn from "../../GreenBtn";
import { useState } from "react";
import Cookies from "js-cookie";
import { BACKEND_URL } from "../../../../config.js";
import { IoMdClose } from "react-icons/io";

export default function EditProductForm({ onClose, product, onChange}) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [dimensionValues, setDimensionValues] = useState(product.dimensions);
  const [noOfDimensions, setNoOfDimensions] = useState(
    product.dimensions.length
  );

  function handleClick() {
    setLoading(true);
    if (name === "" || description === "" || dimensionValues === null) {
      alert("Cannot have empty fields");
      setLoading(false);
    }

    const token = Cookies.get("token");
    fetch(BACKEND_URL + "/api/admin/products?token=" + token, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({
        name: name,
        description: description,
        productCode: product.productCode,
        price: price,
        dimensions: dimensionValues,
      }),
    }).then(response => response.json())
      .then((data) => {
        onChange(data.product);
        setLoading(false);
        onClose();
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-5 flex items-center justify-center">
      <div className="bg-slate-100 opacity-100 w-5/12 h-4/5 overflow-y-auto p-6 z-10 shadow-xl">
        {/* Your form content */}
        <div className="flex flex-row justify-end">
          <h2 className="text-2xl text-primary text-center font-semibold mb-4 w-full">
            Edit Product
          </h2>
          <IoMdClose
            size={30}
            className="hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="text-primary text-xl mt-3 mb-3">
          <p className="my-2">{"Product Code: " + product.productCode}</p>
          <p className="my-2">{"Category: " + product.category.name}</p>
          <p className="my-2">Product Name</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="text"
            placeholder="Enter product name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p className="my-2">Standard price per roll</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="number"
            placeholder="Enter standard price per roll here"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <p className="my-2">Description</p>
            <textarea
              className="p-2 border border-primary my-2 w-full"
              type="text"
              rows='4'
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
        </div>
        <div className="flex flex-row justify-end w-full">
          <GreenBtn name="Save" loading={loading} func={handleClick} />
        </div>
      </div>
    </div>
  );
}
