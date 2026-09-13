import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQty, decreaseQty, removeItem } from './CartSlice';

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {items.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {items.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          ))}
          <div className="cart-total">Total Amount: ${totalAmount}</div>
          <button onClick={() => alert('Coming Soon!')}>Checkout</button>
          <Link to="/plants"><button>Continue Shopping</button></Link>
        </>
      )}
    </div>
  );
}

export default CartItem;