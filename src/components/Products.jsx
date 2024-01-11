import React from "react";
import formatCurrenty from "../utils";

function Products({ items  , addProducts}) {
  return (
    <div>
      <ul className="products">
        {items.map((item) => (
          <li key={item.id}>
            <div className="product" >
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <div className="product-price">
                <button onClick={() => addProducts(item)}>افزودن به سبد خرید</button>
                <div className="price">{formatCurrenty(item.price)}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
