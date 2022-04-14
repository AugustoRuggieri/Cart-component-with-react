import React from "react";
import { useGlobalContext } from "../context/context";
import CartItem from "./CartItem";

const Cart = () => {
    const { ...state } = useGlobalContext();
    const { deleteAll } = useGlobalContext();

    return (
        <section className="cart-container">
            <div className="cart-header">
                <h2>Your Cart</h2>
                {
                    state.itemCounter ? <h6 className="empty-cart-btn" onClick={() => deleteAll()}>Remove all items</h6> : <h6>Your cart is empty</h6>
                }
                
            </div>

            <section className="cart-section">
                {
                    state.products.map(el => {
                        return <CartItem key={el._id} {...el} />
                    })
                }
            </section>
        </section>
    );
};

export default Cart;