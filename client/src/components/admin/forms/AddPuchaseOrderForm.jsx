import GreenBtn from "../../GreenBtn";
import { useState } from "react";
import Cookies from "js-cookie";
import { BACKEND_URL } from "../../../../config.js";
import { IoMdClose, IoMdTrash, IoIosAddCircle } from "react-icons/io";

const headers = [
  "Item Number",
  "Description",
  "Quantity",
  "Unit Price",
  "Extended Price",
  "Actions",
];

export default function AddPurchaseOrderForm({ visible, onClose }) {
  const [loading, setLoading] = useState(false);
  const [shipTo, setShipTo] = useState("");
  const [orderedFrom, setOrderedFrom] = useState("");
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState("");
  const [buyer, setBuyer] = useState("");
  const [items, setItems] = useState([]);
  const [terms, setTerms] = useState("");
  const [date, setDate] = useState("");
  const [shipVia, setShipVia] = useState("");
  const [image, setImage] = useState(null);
  const [totalExtendedPrice, setTotalExtendedPrice] = useState(0);

  function changeTotalExtendedPrice() {
    setTotalExtendedPrice(
      items.reduce((total, item) => total + item.quantity * item.unitPrice, 0)
    );
  }

  if (!visible) {
    return null;
  }

  function handleAddNewItem(e) {
    e.preventDefault();
    setItems([
      ...items,
      { itemNumber: "", description: "", quantity: 0, unitPrice: 0 },
    ]);
  }

  const handleClick = () => {
    setLoading(true);
    if (
      productCode === "" ||
      description === "" ||
      dimensionValues === null ||
      category === "" ||
      image === null ||
      price === ""
    ) {
      alert("Cannot have empty fields");
      setLoading(false);
    }

    const productData = new FormData();
    productData.append("description", description);
    productData.append("productCode", productCode);
    productData.append("price", price);
    productData.append("image", image);
    productData.append("category", category);
    productData.append("dimensions", dimensionValues);

    const token = Cookies.get("token");
    fetch(BACKEND_URL + "/api/admin/products?token=" + token, {
      method: "POST",
      body: productData,
    })
      .then((response) => {
        setLoading(false);
        onClose();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-5 flex items-center justify-center">
      <div className="bg-slate-100 opacity-100 w-8/12 h-4/5 overflow-y-auto p-6 z-10 shadow-xl">
        {/* Your form content */}
        <div className="flex flex-row justify-end">
          <h2 className="text-2xl text-primary text-center font-semibold mb-4 w-full">
            Add Purchase Order
          </h2>
          <IoMdClose
            size={30}
            className="hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="text-primary text-xl mt-3 mb-3">
          <p className="my-2">Upload purchase order</p>
          <input
            type="file"
            accept="image/*"
            className="p-2 border border-primary my-2 w-full"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <p className="my-2">Purchase Order Number</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="text"
            placeholder="Enter purchase order number here"
            value={purchaseOrderNumber}
            onChange={(e) => setPurchaseOrderNumber(e.target.value)}
          />

          <p className="my-2">Date</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="date"
            placeholder="Enter date here"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <p className="my-2">Ship To</p>
          <textarea
            className="p-2 border border-primary my-2 w-full"
            type="text"
            rows="4"
            placeholder="Enter Shipment details here"
            value={shipTo}
            onChange={(e) => setShipTo(e.target.value)}
          />

          <p className="my-2">Ordered From</p>
          <textarea
            className="p-2 border border-primary my-2 w-full"
            type="text"
            rows="4"
            placeholder="Enter Shipment details here"
            value={orderedFrom}
            onChange={(e) => setOrderedFrom(e.target.value)}
          />

          <p className="my-2">Buyer</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="text"
            placeholder="Enter buyer name here"
            value={buyer}
            onChange={(e) => setBuyer(e.target.value)}
          />

          <p className="my-2">Terms</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="text"
            placeholder="Enter terms here"
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
          />

          <p className="my-2">Ship via</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="text"
            placeholder="Enter ship via details here"
            value={shipVia}
            onChange={(e) => setShipVia(e.target.value)}
          />

          <div className="w-full my-2 flex flex-row justify-between">
            <p>Items</p>
            <IoIosAddCircle
              size={30}
              className="hover:cursor-pointer hover:text-green-600"
              onClick={handleAddNewItem}
            />
          </div>

          <table className="border-collapse w-full mx-auto">
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
              {items.map((item, key) => {
                return (
                  <tr key={key}>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      <input
                        type="text"
                        className="w-full h-full text-center"
                        value={item.itemNumber || ""}
                        onChange={(e) => {
                          setItems(
                            items.map((item, index) => {
                              if (index === key) {
                                item.itemNumber = e.target.value;
                              }
                              return item;
                            })
                          );
                        }}
                      />
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      <input
                        type="text"
                        rowSpan={2}
                        className="w-full h-full text-center"
                        value={item.description || ""}
                        onChange={(e) => {
                          setItems(
                            items.map((item, index) => {
                              if (index === key) {
                                item.description = e.target.value;
                              }
                              return item;
                            })
                          );
                        }}
                      />
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      <input
                        type="number"
                        className="w-full h-full text-center"
                        value={item.quantity || 0}
                        onChange={(e) => {
                          setItems(
                            items.map((item, index) => {
                              if (index === key) {
                                item.quantity = e.target.value;
                              }
                              return item;
                            })
                          );
                          changeTotalExtendedPrice();
                        }}
                      />
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      <input
                        type="number"
                        className="w-full h-full text-center"
                        value={item.unitPrice || 0}
                        onChange={(e) => {
                          setItems(
                            items.map((item, index) => {
                              if (index === key) {
                                item.unitPrice = e.target.value;
                              }
                              return item;
                            })
                          );
                          changeTotalExtendedPrice();
                        }}
                      />
                    </td>

                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.unitPrice * item.quantity || 0}
                    </td>

                    <td className="border-2 border-primary p-2 text-lg text-center">
                      <IoMdTrash
                        size={30}
                        className="hover:cursor-pointer hover:text-red-600 mx-auto my-auto"
                        onClick={() => handleDeleteProduct(item)}
                      />
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={4} className="border-2 cols-3 border-primary p-2 text-center text-lg font-bold bg-blue-200">
                  Total Extended Price
                </td>
                <td className="border-2 border-primary p-2 text-lg text-center">
                  {totalExtendedPrice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-row justify-end w-full">
          <GreenBtn name="Save" loading={loading} func={handleClick} />
        </div>
      </div>
    </div>
  );
}
