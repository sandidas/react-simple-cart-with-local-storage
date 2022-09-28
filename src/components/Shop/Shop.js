import React, { useEffect, useState } from "react";
import { cartAddToLocalStorage, deleteStoredAllCartItems, getStoredCart } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
      // fetch('../../json/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // state
  const [cart, setCart] = useState([]);

  const addToCartSingleItem = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = []; // Empty array for use it later
    // since the 'product.quantiy' default value is 0 then we have to fix this issue
    const existing = cart.find((product) => product.id === selectedProduct.id);
    // get fresh new product
    if (!existing) {
      selectedProduct.quantity = 1; // if not found product in existing cart then 'product.quantiy' value will declare 1; because 'product.quantiy' default value is 0
      newCart = [...cart, selectedProduct]; //
    } else {
      // check exist product. If found then sum with old value
      const restItems = cart.filter((product) => product.id !== selectedProduct.id);
      existing.quantity = existing.quantity + 1; // the existing value will increase
      newCart = [...restItems, existing]; //send to new cart existing and rest items
    }

    // console.log(product);
    // Since the react state is immutable, We are not going to push the data into array, better we copy the old data. Because it’s helps react to creating a new DOM.
    // newCart = [...cart, selectedProduct];
    // console.log(newCart);
    setCart(newCart);
    // send ID to Local Storage to store data in browser local storage
    cartAddToLocalStorage(selectedProduct.id);
  };

  // Step 8
  // Check local storage existing data has or not. If has then will print to cart
  // To load data outside of my code it's called side effect. We have to use useEffect
  useEffect(() => {
    // call a function from local storage to get data from LS
    const storedCart = getStoredCart(); // We will get only ID and quanity from storage.
    const savedCart = []; //this empty array for. If we get product we will push product into this array by 'for loop'. and send into to exiting cart.
    // get only ID from storedCart
    for (const id in storedCart) {
      // Now we have to get products by ID. In above we call SET METHOD "products". Which has all products list. let's call FIND to find by ID
      const addedProduct = products.find((product) => product.id === id);
      // check the product quantity and set into current saved cart
      if (addedProduct) {
        const quantity = storedCart[id]; // we will get value of property id. This value is quantity
        addedProduct.quantity = quantity; // addedProduct.quantity because we know in 'addedProduct' we have a property called 'quantity'. We will reasign this.
        savedCart.push(addedProduct); // pushing data to saved cart
      }
      setCart(savedCart); // call the set cart to push existing items
      console.log(addedProduct);
    }
    // use a dependency. becasue this useEffect depends on products load or not.
  }, [products]);

  // function to deleted a cart items
  const deleteAllCartItems = () => {
    deleteStoredAllCartItems();
    setCart([]);
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mt-5">
        <div className="col-span-4">
          <div className="grid grid-cols-3 gap-4 mt-5">
            {/* Create a Prodcut component to show individual product and use attribute to send and receive data  */}
            {products.map((product) => (
              <Product product={product} key={product.id} addToCartSingleItem={addToCartSingleItem}></Product>
            ))}
          </div>
        </div>
        <div>
          {/* Create a Cart component to send/show cart item  */}
          <Cart cart={cart} deleteAllCartItems={deleteAllCartItems}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
