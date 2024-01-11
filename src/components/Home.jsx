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

  const sortProducts = (e) => {
    setSort(e.target.value);
    if(sort === "asc"){
        setItems(data.products.sort((a,b) => (a.id < b.id ? 1 : -1)))
    }else{
        setItems(data.products.sort((a,b) => (a.id > b.id ? 1 : -1)));
    }
  }

  const filterProducts = (e) =>{
    const eBrand = e.target.value;
    if(eBrand == ""){
        setBrand(eBrand)
        setItems(data.products);
    }else{
        setBrand(eBrand);
        setItems(data.products.filter(product => product.availableBrand.indexOf(eBrand) >= 0));
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
