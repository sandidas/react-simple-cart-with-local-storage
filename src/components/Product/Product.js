import React from "react";

const Product = (props) => {
  // console.log(props);
  const { product, addToCartSingleItem } = props;
  const { id, name, category, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = product;

  //   console.log(product);

  return (
    <div>
      <div className="card bg-base-100 shadow-lg shadow-cyan-500/50 border">
        <figure>
          <img src={img} className="max-h-200" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {name} </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end flex items-center">
            <strong>${price}</strong>
            <button onClick={() => addToCartSingleItem(product)} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
