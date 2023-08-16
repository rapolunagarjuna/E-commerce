import React from 'react'
import { renderDate } from "../Pending.jsx";

export default function PendingOrderSummary({orderNumber, total, subTotal, customer, order}) {
  return (
    <div className="flex flex-row text-primary text-xl mt-5 mb-5">
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
        </div>
  )
}
