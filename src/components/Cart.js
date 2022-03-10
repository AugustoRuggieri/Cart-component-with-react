import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import CartItem from "./CartItem"; 

const Cart = () => {
    const {...state} = useGlobalContext();
    const { deleteAll } = useGlobalContext();

    return (
        <section className="cart-container">
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