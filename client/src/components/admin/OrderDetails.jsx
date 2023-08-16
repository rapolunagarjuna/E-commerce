import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { BACKEND_URL } from "../../../config.js";
import PersistentDrawerLeft from "./SideBar";
import PendingOrderSummary from "./components/PendingOrderSummary.jsx";

const headers = [
  "Product Name",
  "Quantity",
  "Roll Price($)",
  "Inventory",
  "Total($)",
];

export default function AdminOrderDetails() {
  const TOKEN = Cookies.get("token");
  const orderNumber = useParams().orderNumber;
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    fetch(
      BACKEND_URL + `/api/admin/orders/${orderNumber}?token=${TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrder(data.order);
        setCustomer(data.customer);
        setItems(data.items);
        setSubTotal(data.order.subTotal);
        setTotal(data.order.total);
      });
  }, [TOKEN, orderNumber]);


  return (
    <PersistentDrawerLeft>
      <div className="w-10/12 mx-auto flex flex-col">
        <p className="mt-16 text-primary text-center text-5xl">Order Details</p>
        <PendingOrderSummary
          orderNumber={orderNumber}
          customer={customer}
          order={order}
          total={total}
          subTotal={subTotal}
        />

        <table className="mt-10 border-collapse mx-auto">
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
            {items.length === 0 ? (
              <tr>
                <td
                  className="text-primary text-xl pt-10 pb-10 w-full h-fit text-center"
                  colSpan={5}
                >
                  No order items found
                </td>
              </tr>
            ) : (
              items.map((item, key) => {
                return (
                  <tr key={key}>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.name}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.quantity}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.price}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.price * item.quantity}
                    </td>
                    <td className="border-2 border-primary p-2 text-lg text-center">
                      {item.price * item.quantity}
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
