import React from "react";

const Cart = ({ cart, deleteAllCartItems }) => {
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
    <div className="sticky top-40">
      <div className="card bg-slate-900 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Order Summery</h2>
          <p>Selected Items: {totalQuantity}</p>
          <p>Total Price: ${total} </p>
          <p>Total Shipping: ${shipping} </p>
          <p>Tax: ${tax} </p>
          <p>
            <b>Grand Total: {grandTotal.toFixed(2)} </b>
          </p>
          <div className="card-actions justify-end">
            <button onClick={deleteAllCartItems} className="btn btn-secondary mt-5">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
