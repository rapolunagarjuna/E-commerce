import { useEffect, useState } from "react";
import CustomSelect from "../CustomSelect";
import SearchBar from "./SearchBar";
import Cookies from "js-cookie";
import BlueBtn from "../BlueBtn";
import PersistentDrawerLeft from "./SideBar.jsx";
import { BACKEND_URL } from "../../../config";
import AddToInventoryForm from "./forms/AddToInventoryForm";
import ConfirmDeleteForm from "./forms/Confirmation";

const options = [
  { value: "None", label: "None" },
  { value: "Geosynthetics", label: "Geosynthetics" },
  { value: "Industrial Textiles", label: "Industrial Textiles" },
  { value: "Agro Textiles", label: "Agro Textiles" },
  { value: "Packaging Textiles", label: "Packaging Textiles" },
  { value: "Accessories", label: "Accessories" },
  { value: "Erosion Control", label: "Erosion Control" },
];

const truncateText = (text, lines) => {
  const words = text.split(" ");
  const maxWords = lines * 10; // Assuming an average of 10 words per line

  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }

  return text;
};

function Item({ item, onClick }) {
  return (
    <div className="p-5 mt-5 mb-5 w-full bg-slate-100 h-fit border border-primary shadow-2xl ">
      <div className="flex flex-row  text-base justify-between ">
        <div className="w-6/12">
          <p className="text-primary text-2xl  2xl:text-3xl w-fit ">
            {item.name}
          </p>

          <div className="mt-5 flex flex-col w-full justify-between">
            <div>{"Product Code:" + item.productCode}</div>
            <div>{"Dimension:" + item.dimension}</div>

            <div className="w-full h-fit flex flex-row justify-end">
              <BlueBtn name="Add Inventory" func={() => onClick(item)} />
            </div>
          </div>
        </div>

        <div className="ml-5 w-fit text-lg">
          <div className="flex flex-col w-36 h-36 bg-secondary shadow-xl p-2 text-center text-primary rounded-lg">
            <p className="text-lg">Inventory</p>
            <p className="text-4xl mt-4 font-black">{item.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InventoryPage() {
  const [products, setProducts] = useState([]);
  const [filteredByCategory, setFilteredByCategory] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState(options[0].value);
  const [selectedProductCode, setSelectedProductCode] = useState({});
  const [visibleAddForm, setVisibleAddForm] = useState(false);
  const [visibleConfirmForm, setVisibleConfirmForm] = useState(false);

  const TOKEN = Cookies.get("token");

  const handleOptionChange = (selectedOption) => {
    setCategory(selectedOption);
  };

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/inventory?token=${TOKEN}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredByCategory(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [TOKEN]);

  useEffect(() => {
    if (category !== "None") {
      const filteredProductsBasedOnCategory = products.filter(
        (item) => item.category === category
      );
      setFilteredByCategory(filteredProductsBasedOnCategory);
      setFilteredProducts(filteredProductsBasedOnCategory);
    } else {
      setFilteredByCategory(products);
    }
  }, [category]);

  function handleAddInventory(product) {
    setSelectedProductCode(product);
    setVisibleAddForm(true); //
  }

  function handleClickInForm(quantity) {
    const updatedProduct = {
      product: selectedProductCode,
      quantity: quantity,
    };
    setSelectedProductCode(updatedProduct);
    setVisibleAddForm(false);
    setVisibleConfirmForm(true);
  }

  function apiCallToInventory() {
    fetch(`${BACKEND_URL}/api/inventory?token=${TOKEN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productCode: selectedProductCode.product.productCode,
        dimension: selectedProductCode.product.dimension,
        quantity: selectedProductCode.quantity,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  return (
    <PersistentDrawerLeft>
      <div className="w-full h-fit ">
        <div className="w-9/12 h-full flex flex-col mx-auto">
          <p className="mt-16 mb-16 text-center text-primary text-5xl">
            Inventory
          </p>

          <div className="flex flex-row w-full justify-between">
            <div className="w-5/12  min-w-48 ">
              <SearchBar
                value=""
                onChange={(e) => setFilteredProducts(e)}
                items={filteredByCategory}
              />
            </div>
            <div className="w-60  2xl:w-64">
              <CustomSelect
                options={options}
                value={category}
                onChange={handleOptionChange}
              />
            </div>
          </div>

          <div className="flex flex-col w-full h-fit">
            {filteredProducts.map((item, index) => (
              <Item key={index} item={item} onClick={handleAddInventory} />
            ))}
          </div>
        </div>
      </div>
      {visibleAddForm && (
        <AddToInventoryForm
          product={selectedProductCode}
          onClose={() => {
            setSelectedProductCode({});
            setVisibleAddForm(false);
          }}
          onClick={handleClickInForm}
        />
      )}
      {visibleConfirmForm && (
        <ConfirmDeleteForm
          visible={visibleConfirmForm}
          name={`add ${selectedProductCode.quantity} items into ${selectedProductCode.product.productCode}`}
          onClose={() => {
            setSelectedProductCode({});
            setVisibleConfirmForm(false);
          }}
          onConfirm={apiCallToInventory}
        />
      )}
    </PersistentDrawerLeft>
  );
}
