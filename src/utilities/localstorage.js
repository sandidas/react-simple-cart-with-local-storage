const cartAddToLocalStorage = (id) => {
  // localStorage.getItem(id)

  let shoppingCart = {};
  // get the shopping cart items from local storage
  const storedCart = localStorage.getItem("site-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  // add quantity
  // check object's property value
  const quantity = shoppingCart[id]; // get value by property name.
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("site-cart", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};
  // get the shopping cart items from local storage
  const storedCart = localStorage.getItem("site-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  return shoppingCart;
};

const cartRemoveItemFromLocalStorage = (id) => {
  const storedCart = localStorage.getItem("site-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("site-cart", JSON.stringify(shoppingCart));
    } else {
    }
  }
};

export { cartAddToLocalStorage, cartRemoveItemFromLocalStorage, getStoredCart };
