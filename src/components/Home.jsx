import React from "react";
import Cart from "./Cart";
import Products from "./Products";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import data from "../data.json";
function Home() {
  const [items, setItems] = useState(data.products);
  const [sort, setSort] = useState("ass");
  const [brand, setBrand] = useState("");
  const [cartItems, setCartItems] = useState("");

  const sortProducts = (e) => {
    setSort(e.target.value);
    if (sort === "asc") {
      setItems(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    } else {
      setItems(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  const filterProducts = (e) => {
    const eBrand = e.target.value;
    if (eBrand == "") {
      setBrand(eBrand);
      setItems(data.products);
    } else {
      setBrand(eBrand);
      setItems(data.products.filter((product) => product.availableBrand.indexOf(eBrand) >= 0));
    }
  };

  const addProducts = (product) => {
      if(cartItems.length > 0){
        const exist = cartItems.find((element) => element.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((element) => (element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element))
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    }else setCartItems([...cartItems , {...product , qty: 1}]);

  };


  const removeProducts = (product) =>{
    if(cartItems.length > 0){
        const exist = cartItems.find((element) => element.id === product.id);
        if(exist.qty == 1) {
            setCartItems(cartItems.filter(e => e.id != product.id));
        }else{
            setCartItems(
                cartItems.map((element) => (element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element))
              );
        }
    }
  }

  return (
    <div className="container">
      <header>
        <a href="">فروشگاه تاپ لرن</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter count={items.length} sortProducts={sortProducts} brand={brand} filterProducts={filterProducts} />
            <Products items={items} addProducts={addProducts} />
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} removeProducts={removeProducts} />
          </div>
        </div>
      </main>
      <footer>طراحی و توسعه توسط من و تو.</footer>
    </div>
  );
}

export default Home;
