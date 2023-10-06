import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { IoMdCreate } from "react-icons/io";
import { BACKEND_URL } from "../../../config.js";
import PersistentDrawerLeft from "./SideBar";
import BlueBtn from "../BlueBtn.jsx";
import GreenBtn from "../GreenBtn.jsx";
import EditOrderItemForm from "./forms/EditOrderItemForm.jsx";
import PendingOrderSummary from "./components/PendingOrderSummary.jsx";
import ConfirmDeleteForm from "./forms/Confirmation.jsx";

const headers = [
  "Product Name",
  "Quantity",
  "Standard Roll Price($)",
  "Quoted Roll Price($)",
  "Inventory",
  "Total($)",
  "Actions",
];

export default function AdminPendingOrderDetails() {
  const TOKEN = Cookies.get("token");
  const orderNumber = useParams().orderNumber;
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [customer, setCustomer] = useState({});
  const [product, setProduct] = useState({});
  const [visibleEditOrderForm, setVisibleEditOrderForm] = useState(false);
  const [visibleConfirmForm, setVisibleConfirmForm] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    fetch(
      BACKEND_URL + `/api/admin/orders/pending/${orderNumber}?token=${TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        setOrder(data.order);
        setCustomer(data.customer);
        setItems(data.items);
        setSubTotal(data.customer.subTotal);
        setTotal(data.customer.total);
      });
  }, [TOKEN, orderNumber]);

  function handleEditOrder(product) {
    setProduct(product);
    setVisibleEditOrderForm(true);
  }

  function onSave() {
    console.log("pressed");
    setSaveLoading(true);
    fetch(BACKEND_URL + `/api/admin/orders/${order._id}?token=${TOKEN}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderItems: items }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Order saved successfully");
        setSaveLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setSaveLoading(false);
      });
  }

  async function approvalApi() {
    fetch(BACKEND_URL + `/api/admin/orders/${order._id}?token=${TOKEN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderItems: items }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Order approved successfully");
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    let subTotal = 0;
    items.forEach((item) => (subTotal += item.price * item.quantity));
    setSubTotal(subTotal);
    const newTotal =
      (subTotal - (subTotal * order.discount) / 100) * (1 + order.tax / 100);
    setTotal(newTotal);
  }, [items]);

  function handleItemChange(updatedProduct) {
    let updatedItems = [...items];

    // Find the index of the item with the matching productCode
    const index = updatedItems.findIndex(
      (item) => item.productCode === updatedProduct.productCode
    );

    if (index !== -1) {
      // Update the quantity and price of the found item
      updatedItems[index].quantity = updatedProduct.quantity;
      updatedItems[index].price = updatedProduct.price;

      setItems(updatedItems);
    }

    setVisibleEditOrderForm(false);
    setProduct({});
  }

  return (
    <PersistentDrawerLeft>
      <div className="w-10/12 mx-auto flex flex-col">
        <p className="mt-16 text-primary text-center text-5xl">Order Details</p>
        {/* <div className="flex flex-row text-primary text-xl mt-5 mb-5">
          <div className="flex flex-col">
            <span>Order number</span>
            <span>Delivery date</span>
            <span>Customer name</span>
            <span>Customer email</span>
            <span>Sub total</span>
            <span>Discount</span>
            <span>Tax</span>
            <span>Total</span>
          </div>
          <div className="flex flex-col">
            <span>:</span>
            <span>:</span>
            <span>:</span>
            <span>:</span>
            <span>:</span>
            <span>:</span>
            <span>:</span>
            <span>:</span>
          </div>
          <div className="flex flex-col pl-3">
            <span>{orderNumber}</span>
            <span>{renderDate(order.deliveryDate)}</span>
            <span>{customer.firstName + " " + customer.lastName}</span>
            <span>{customer.email}</span>
            <span>{"$" + subTotal}</span>
            <span>{order.discount + "%"}</span>
            <span>{order.tax + "%"}</span>
            <span>{"$" + total}</span>
          </div>
        </div> */}
        <PendingOrderSummary
          orderNumber={orderNumber}
          customer={customer}
          order={order}
          total={total}
          subTotal={subTotal}
        />

        <div className="mt-5 flex flex-row justify-end gap-5">
          <GreenBtn name="Save" loading={saveLoading} func={onSave} />
          <BlueBtn name="Approve" func={() => setVisibleConfirmForm(true)} />
        </div>
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
                      {item.standardPrice}
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
                    <td className="border-2 border-primary p-2 text-lg  w-32 h-full">
                      <div className="flex flex-row m-auto w-fit h-fit">
                        <IoMdCreate
                          size={30}
                          className="hover:cursor-pointer"
                          onClick={() => handleEditOrder(item)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {visibleEditOrderForm ? (
        <EditOrderItemForm
          item={product}
          onSave={(updated) => handleItemChange(updated)}
          onClose={() => {
            setVisibleEditOrderForm(false);
            setProduct({});
          }}
        />
      ) : null}
      <ConfirmDeleteForm
        name={`approve the order ${orderNumber}`}
        visible={visibleConfirmForm}
        onClose={() => setVisibleConfirmForm(false)}
        onConfirm={approvalApi}
      />
    </PersistentDrawerLeft>
  );
}
