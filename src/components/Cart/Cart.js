import React, { useState, useEffect } from 'react';
import png from "../../images/—Pngtree—bobtoon sad shopping bag cartoon_6457776 (1).png";
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import './Cart.css';
import { toast } from 'react-toastify';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartObjects')) || [];
    setCartItems(items);
  }, []);

  const handleQuantityChange = (index, amount) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += amount;
    if (newCartItems[index].quantity < 1) newCartItems[index].quantity = 1;
    setCartItems(newCartItems);
    localStorage.setItem('cartObjects', JSON.stringify(newCartItems));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.newPrice, 0);
  };

  const handleCheckout = () => {
    localStorage.removeItem('cartObjects');
    setCartItems([]);
    toast.success('Purchase succesfull!');
  };

  return (
    <div className='cart-container'>
      {cartItems.length === 0 ? (
        <>
          <img src={png} className='sad-cart-image'></img>
          <span>Your bag is sad and empty, Go shopping!</span>
          <button className='btns btn-secondary'><a style={{ textDecoration: "none", color: "black" }} href='/'>Lets go shopping</a></button>
        </>

      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.title} />
              <span>{item.title}</span>
              <div>
                <button className='btns btn-secondary' onClick={() => handleQuantityChange(index, -1)}><AiFillMinusSquare /></button>
                <span className='span-with-padding'>{item.quantity}</span>
                <button className='btns btn-secondary' onClick={() => handleQuantityChange(index, 1)}><AiFillPlusSquare /></button>
              </div>
              <span className='span-with-padding'>{item.newPrice}.00$</span>
            </div>
          ))}
          <div className='checkout-btn-container'>
            <span>Total Price: ${getTotalPrice().toFixed(2)}</span>
            <button className='btns btn-secondary' onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
