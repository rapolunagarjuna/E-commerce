import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { BACKEND_URL } from "../../../config.js";
import PersistentDrawerLeft from "./SideBar";
import { renderDate } from "./Pending.jsx";
import { useNavigate } from "react-router-dom";

const headers = ["S.No", "Order Number", "Status", "Delivery Date"];

export default function AdminOrders() {
  const TOKEN = Cookies.get("token");
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(BACKEND_URL + `/api/admin/orders?token=${TOKEN}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.orders);
        setOrders(data.orders);
      });
  }, TOKEN);

  return (
    <PersistentDrawerLeft>
      <div className="flex flex-col w-full">
        <p className="mb-10 mt-16 text-primary text-center text-5xl">Orders</p>

        <table className="mt-10 border-collapse w-10/12 mx-auto">
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
            {orders.length === 0 ? (
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
                    className="hover:bg-secondary hover:cursor-pointer"
                    onClick={() => navigate(`/admin/orders/${item._id}`)}
                  >
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {key + 1}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item._id}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.status}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {renderDate(item.deliveryDate)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </PersistentDrawerLeft>
  );
}
