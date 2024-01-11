import React from "react";
import formatCurrenty from "../utils";

function Cart({ cartItems, removeProducts }) {
  const itemPrice = () => {
    let itemP = 0;
    if (cartItems.length > 0) {
      itemP = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    }
    return itemP;
  };
  const totalPrice = itemPrice();

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="show-price">شما {cartItems.length} محصول در سبد خرید دارید</div>
      ) : (
        <div className="empty-price">سبد خرید خالی است.</div>
      )}
      {cartItems && (
        <>
          <div className="cart-item">
            {cartItems.map((cart) => (
              <div className="product-item" key={cart.id}>
                <div className="product-detail">
                  <img src={cart.image} alt="" />
                  <h2>{cart.title}</h2>
                </div>
                <div className="product-price">
                  <div className="price">
                    <span>{formatCurrenty(cart.price)}</span>
                    <span className="qty">{cart.qty} خرید</span>
                  </div>
                  <div className="remove-item">
                    <button onClick={() => removeProducts(cart)}>حذف از سبد</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="total-price">
        <div className="total-text"> مجموع قیمت : </div>
        &nbsp;
        <div className="total"> {formatCurrenty(totalPrice)}</div>
      </div>
    </>
  );
}

export default Cart;
