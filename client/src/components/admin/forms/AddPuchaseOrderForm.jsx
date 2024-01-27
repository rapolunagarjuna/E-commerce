import GreenBtn from "../../GreenBtn";
import { useState } from "react";
import Cookies from "js-cookie";
import { BACKEND_URL } from "../../../../config.js";
import BlueBtn from "../../BlueBtn.jsx";
import { IoMdClose, IoMdTrash, IoIosAddCircle } from "react-icons/io";

const headers = [
  "Description",
  "Quantity",
  "Unit Price",
  "Extended Price",
  "Actions",
];

export default function AddPurchaseOrderForm({ visible, onClose, purchaseOrders, setOrders }) {
  const [skipLoading, setSkipLoading] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [backLoading, setBackLoading] = useState(false);

  const [shipTo, setShipTo] = useState("");
  const [orderedFrom, setOrderedFrom] = useState("");
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState("");
  const [buyer, setBuyer] = useState("");
  const [items, setItems] = useState([
    { description: "", quantity: 0, unitPrice: 0 },
  ]);
  const [terms, setTerms] = useState("");
  const [date, setDate] = useState("");
  const [shipVia, setShipVia] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [totalExtendedPrice, setTotalExtendedPrice] = useState(0);

  const [image, setImage] = useState(null);

  function changeTotalExtendedPrice() {
    setTotalExtendedPrice(
      items.reduce((total, item) => total + item.quantity * item.unitPrice, 0)
    );
  }

  if (!visible) {
    return null;
  }

  /*  logic to render forms elements */

  const renderStep1 = () => {
    return (
      <div className="text-primary text-xl mt-3 mb-3">
        <p className="my-2">Upload purchase order</p>
        <input
          type="file"
          accept="pdf/*"
          className="p-2 text-center border border-primary my-2 w-full"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <div className="flex flex-row mt-5 gap-5 justify-end w-full">
          <BlueBtn name="Skip" isLoading={skipLoading} func={handleSkipBtn} />
          <GreenBtn name="Next" isLoading={nextLoading} func={handleNextBtn} />
        </div>
      </div>
    );
  };

  const renderStep2 = () => {
    return (
      <div>
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
          rows="2"
          placeholder="Enter Shipment details here"
          value={shipTo}
          onChange={(e) => setShipTo(e.target.value)}
        />

        <p className="my-2">Ordered From</p>
        <textarea
          className="p-2 border border-primary my-2 w-full"
          type="text"
          rows="2"
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
              <td
                colSpan={3}
                className="border-2 cols-3 border-primary p-2 text-center text-lg font-bold bg-blue-200"
              >
                Total Extended Price
              </td>
              <td className="border-2 border-primary p-2 text-lg text-center">
                {totalExtendedPrice}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-row mt-5 gap-5 justify-end w-full">
          <BlueBtn name="Back" isLoading={backLoading} func={handleBackBtn} />
          <GreenBtn name="Save" isLoading={saveLoading} func={handleSaveBtn} />
        </div>
      </div>
    );
  };

  /*  logic to handle buttons */

  function handleAddNewItem(e) {
    e.preventDefault();
    setItems([...items, { description: "", quantity: 0, unitPrice: 0 }]);
  }

  function handleBackBtn(e) {
    e.preventDefault();
    setCurrentStep(1);
  }

  function handleSkipBtn(e) {
    e.preventDefault();
    setCurrentStep(2);
  }

  function handleNextBtn(e) {
    e.preventDefault();

    setNextLoading(true);

    // do api request here
    if (image === null) {
      alert("Cannot have empty fields");
      setNextLoading(false);
    }

    const productData = new FormData();
    productData.append("pdfFile", image);

    const token = Cookies.get("token");
    fetch(BACKEND_URL + "/api/admin/ocr?token=" + token, {
      method: "POST",
      body: productData,
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            console.log("Step 2");
            console.log(data.data);

            if (data.data.buyer !== undefined || data.data.buyer !== null || data.data.buyer !== "") {
              setBuyer(data.data.buyer || "");
            }
            
            if (data.data.purchaseOrderNumber !== undefined || data.data.purchaseOrderNumber !== null || data.data.purchaseOrderNumber !== "") {
              setPurchaseOrderNumber(data.data.purchaseOrderNumber || "");
            }
            
            if(data.data.shipTo !== undefined || data.data.shipTo !== null || data.data.shipTo !== "") {
              setShipTo(data.data.shipTo || "");
            }

            if (data.data.shipVia !== undefined || data.data.shipVia !== null || data.data.shipVia !== "") {
              setShipVia(data.data.shipVia || "");
            }

            if (data.data.terms !== undefined || data.data.terms !== null || data.data.terms !== "") {
              setTerms(data.data.terms || "");
            }
            
            if (data.data.items !== undefined || data.data.items !== null ) {
              setItems(
                data.data.items || [
                  { description: "", quantity: 0, unitPrice: 0 },
                ]
              );
            }
            
            if (data.data.date !== undefined || data.data.date !== null || data.data.date !== "") { 
              const extractDate = data.data.date.split("/");
              const modifiedDate = extractDate[2] + "-" + extractDate[0] + "-" + extractDate[1];
              console.log(modifiedDate);
              setDate(modifiedDate);
            }


            if (data.data.totalExtendedPrice !== undefined || data.data.totalExtendedPrice !== null || data.data.totalExtendedPrice || 0 ) {
              setTotalExtendedPrice(data.data.totalExtendedPrice);
            }
            
            if (data.data.orderedFrom !== undefined || data.data.orderedFrom !== null ) {
              setOrderedFrom(data.data.orderedFrom || "");
            }

            setNextLoading(false);
            setCurrentStep(2);
          })
          .catch((error) => {
            alert(error);
            setNextLoading(false);
            console.error(error);
          });
      })
      .catch((error) => {
        alert(error);
        setNextLoading(false);
        console.error(error);
      });
  }

  const handleSaveBtn = () => {
    setSaveLoading(true);
    if (
      shipTo === "" ||
      orderedFrom === "" ||
      purchaseOrderNumber === "" ||
      buyer === "" ||
      terms === "" ||
      date === "" ||
      shipVia === "" ||
      items.length === 0 ||
      totalExtendedPrice === 0
    ) {
      alert("Cannot have empty fields");
      setSaveLoading(false);
    }

    try {
      console.log(date);
      const purchaseOrder = {
        "shipTo" : shipTo,
        "orderedFrom" : orderedFrom,
        "purchaseOrderNumber" : purchaseOrderNumber,
        "buyer" : buyer,
        "terms" : terms,
        "date" : date,
        "shipVia" : shipVia,
        "items" : items,
        "totalExtendedPrice" : totalExtendedPrice
      };

      const token = Cookies.get("token");
      fetch(BACKEND_URL + "/api/admin/purchaseOrders?token=" + token, {
        method: "POST",
        body: JSON.stringify(purchaseOrder),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          response.json().then(data => setOrders([...purchaseOrders, data]));
          alert("Successfully added purchase order !");
          setSaveLoading(false);
          onClose();
          setCurrentStep(1);
          setDate("");
          setBuyer("");
          setPurchaseOrderNumber("");
          setShipTo("");
          setShipVia("");
          setTerms("");
          setTotalExtendedPrice(0);
          setItems([
            { description: "", quantity: 0, unitPrice: 0 },
          ]);
        })
        .catch((error) => {
          alert(error);
          setSaveLoading(false);
          console.error(error);
        });
    } catch (error) {
      alert(error);
      setSaveLoading(false);
      console.error(error);
    }
  };

  function handleDeleteProduct(product) {
    setItems(items.filter((item) => item !== product));
    changeTotalExtendedPrice();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-5 py-24 flex items-center justify-center">
      <div className="bg-slate-100 opacity-100 w-8/12 h-fit  max-h-full overflow-y-auto p-6 z-10 shadow-xl">
        {/* form content */}
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

        {currentStep === 1 && renderStep1()}

        {currentStep === 2 && renderStep2()}
      </div>
    </div>
  );
}
