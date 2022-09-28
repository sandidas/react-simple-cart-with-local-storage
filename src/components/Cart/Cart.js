import React from "react";

const Cart = ({ cart }) => {
  //   console.log(cart);
  // ERROR it's comes empty array while card not call
  // 49.3 Same as teacher

  let total = 0;
  let shipping = 0;
  let totalQuantity = 0; // total number of product in cart
  for (const product of cart) {
    totalQuantity = totalQuantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  // show only 2 decimal
  const tax = (total * 0.1).toFixed(2); // toFixed convert to text
  const grandTotal = total + shipping + parseFloat(tax);
  return (
    <div className="sticky top-20">
      <h4 className="text-xl text-red-400	">Order Summery </h4>
      <p>Selected Items: {totalQuantity}</p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping: ${shipping} </p>
      <p>Tax: ${tax} </p>
      <p>
        <b>Grand Total: {grandTotal.toFixed(2)} </b>
      </p>
    </div>
  );
};

export default Cart;
