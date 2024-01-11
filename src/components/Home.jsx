import React from "react";
import Cart from "./Cart";
import Products from "./Products";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import data from "../data.json";
function Home() {
  const [items, setItems] = useState(data.products);
  const [sort, setSort] = useState("ass");

  const sortProducts = (e) => {
    setSort(e.target.value);
    if(sort === "asc"){
        setItems(data.products.sort((a,b) => (a.id < b.id ? 1 : -1)))
    }else{
        setItems(data.products.sort((a,b) => (a.id > b.id ? 1 : -1)));
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
            <Filter count={items.length} sortProducts={sortProducts} />
            <Products items={items} />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      <footer>طراحی و توسعه توسط من و تو.</footer>
    </div>
  );
}

export default Home;
