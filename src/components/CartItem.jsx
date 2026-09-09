import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  return (
    <div className="cart-page">

      <nav className="navbar">
        <div className="logo">
          Paradise Nursery
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            🛒 Cart ({totalItems})
          </a>
        </div>
      </nav>

      <div className="cart-container">

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <a
              href="/"
              className="continue-btn"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="cart-list">

              {cartItems.map((item) => {

                const itemTotal =
                  item.price * item.quantity;

                return (
                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-info">

                      <h2>{item.name}</h2>

                      <p>
                        Unit Price: $
                        {item.price}
                      </p>

                      <div className="quantity-controls">

                        <button
                          onClick={() =>
                            decreaseQuantity(item)
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item)
                          }
                        >
                          +
                        </button>

                      </div>

                      <p>
                        Total: $
                        {itemTotal.toFixed(2)}
                      </p>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          dispatch(
                            removeItem(item.id)
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                );
              })}

            </div>

            <div className="cart-summary">

              <h2>
                Total Items: {totalItems}
              </h2>

              <h2>
                Total Amount: $
                {totalAmount.toFixed(2)}
              </h2>

              <button
                className="checkout-btn"
                onClick={() =>
                  alert("Coming Soon")
                }
              >
                Checkout
              </button>

              <a
                href="/"
                className="continue-btn"
              >
                Continue Shopping
              </a>

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default CartItem;
