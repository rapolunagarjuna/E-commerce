import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { BACKEND_URL } from "../../../config.js";
import PersistentDrawerLeft from "./SideBar";
import { renderDate } from "./Pending.jsx";
import { useNavigate } from "react-router-dom";
import BlueBtn from "../BlueBtn.jsx";
import AddPurchaseOrderForm from "./forms/AddPuchaseOrderForm.jsx";

const headers = ["S.No", "Purchase Order Number", "Buyer", "Date" , "Total Extended Price"];

export default function AdminPurchaseOrders() {
  const TOKEN = Cookies.get("token");
  const [orders, setOrders] = useState([]);
  const [isPurchaseOrderFormVisible, setPurchaseOrderFormVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(BACKEND_URL + `/api/admin/purchaseOrders?token=${TOKEN}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, TOKEN);

  const handleAddPurchaseOrder = (e) => {
    e.preventDefault();
    setPurchaseOrderFormVisible(true);
  };

  return (
    <PersistentDrawerLeft>
      <div className="flex flex-col w-full">
        <p className="mb-10 mt-16 text-primary text-center text-5xl">Purchase Orders</p>
        
        <div className="flex flex-row w-10/12 h-fit mb-10 justify-end mx-auto">
          <BlueBtn name="Add Purchase Order" func={handleAddPurchaseOrder} />
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
            {orders === null ||  orders.length === 0 ? (
              <tr>
                <td
                  className="text-primary text-xl pt-10 pb-10 w-full h-fit text-center"
                  colSpan={5}
                >
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((item, key) => {
                return (
                  <tr
                    key={key}
                    // className="hover:bg-secondary hover:cursor-pointer"
                    // onClick={() => navigate(`/admin/orders/${item._id}`)}
                  >
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {key + 1}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.purchaseOrderNumber}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.buyer}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {renderDate(item.date)}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.totalExtendedPrice}
                    </td>
                    {/* <td className="border-2 border-primary p-2 text-lg text-center">
                      {renderDate(item.deliveryDate)}
                    </td> */}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <AddPurchaseOrderForm
          visible={isPurchaseOrderFormVisible}
          onClose={() => setPurchaseOrderFormVisible(false)}
          setOrders={setOrders}
          purchaseOrders={orders}
        />

      </div>
    </PersistentDrawerLeft>
  );
}
