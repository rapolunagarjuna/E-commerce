import PersistentDrawerLeft from "./SideBar";
import BlueBtn from "../BlueBtn";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import AddProductForm from "./forms/AddProductForm";
import ConfirmDeleteForm from "./forms/Confirmation";
import EditProductForm from "./forms/EditProductForm";
import { BACKEND_URL } from "../../../config.js";

const headers = [
  "Product Code",
  "Product Name",
  "Category",
  "Dimensions",
  "Price",
  "Actions",
];

function displayArray(arr) {
  let str = "";
  arr.forEach(item => {
    str += `${item.toString()} , `;
  });
  
  return str;
}

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [isAddProductFormVisible, setAddProductFormVisible] = useState(false);
  const [isEditProductFormVisible, setEditProductFormVisible] = useState(false);
  const [isConfirmation, setConfirmation] = useState(false);
  const TOKEN = Cookies.get("token");

  useEffect(() => {
    const token = Cookies.get("token");
    fetch(`http://localhost:3000/api/admin/products?token=${token}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setAddProductFormVisible(true);
  };

  const handleDeleteProduct = (product) => {
    setProduct(product);
    setConfirmation(true);
  };

  const handleEditProduct = (product) => {
    setProduct(product);
    setEditProductFormVisible(true);
  };

  const handleChangeProducts = (prod) => {
    let updatedProducts = products.map(item => {
      if (item.productCode === prod.productCode) {
        item.dimensions = prod.dimensions;
        item.name = prod.name;
        item.price = prod.price;
        item.description = prod.description;
      }
      return item;
    })
    setProducts(updatedProducts);
  }

  async function deleteProductApi() {
    try {
      const response = await fetch(
        BACKEND_URL +
          "/api/admin/products/" +
          product.productCode +
          "?token=" +
          TOKEN,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const updatedProducts = products.filter(
          (item) => item.productCode !== product.productCode
        );
        setProducts(updatedProducts);
        setProduct({});
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <PersistentDrawerLeft>
      <div className="flex flex-col w-full">
        <p className="mb-10 mt-16 text-primary text-center text-5xl">
          Products
        </p>

        <div className="flex flex-row w-10/12 h-fit mb-10 justify-end mx-auto">
          <BlueBtn name="Add Product" func={handleAddProduct} />
        </div>

        <table className="border-collapse w-10/12 mx-auto">
          <thead>
            <tr>
              {headers.map((item) => (
                <th className="border-2 border-primary p-2 text-lg font-bold bg-blue-200">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((item, key) => {
              return (
                <tr key={key}>
                  <td className="border-2 border-primary p-2 text-lg text-center">
                    {item.productCode}
                  </td>
                  <td className="border-2 border-primary p-2 text-lg text-center">
                    {item.name}
                  </td>
                  <td className="border-2 border-primary p-2 text-lg text-center">
                    {item.category.name}
                  </td>
                  <td className="border-2 border-primary p-2 text-lg text-center">
                    {displayArray(item.dimensions)}
                  </td>
                  <td className="border-2 border-primary p-2 text-lg text-center">
                    {item.price}
                  </td>
                  <td className="border-2 border-primary p-2 text-lg  w-32 h-full">
                    <div className="flex flex-row m-auto w-fit h-fit">
                      <IoMdCreate
                        size={30}
                        className="hover:cursor-pointer"
                        onClick={() => handleEditProduct(item)}
                      />
                      <IoMdTrash
                        size={30}
                        className="hover:cursor-pointer"
                        onClick={() => handleDeleteProduct(item)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <AddProductForm
          visible={isAddProductFormVisible}
          onClose={() => setAddProductFormVisible(false)}
        />

        {isEditProductFormVisible && (
          <EditProductForm
            product={product}
            onClose={() => {
              setProduct({});
              setEditProductFormVisible(false);
            }}
            onChange={prod => handleChangeProducts(prod)}
          />
        )}
        <ConfirmDeleteForm
          visible={isConfirmation}
          name={`delete the product with product code ${product.productCode}`}
          onConfirm={deleteProductApi}
          onClose={() => setConfirmation(false)}
        />
      </div>
    </PersistentDrawerLeft>
  );
}
