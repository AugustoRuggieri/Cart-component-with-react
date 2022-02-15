import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import CartItem from "./CartItem"; 

const Cart = () => {
    const {...state} = useGlobalContext();
    const { deleteAll } = useGlobalContext();

    return (
        <section className="section-center">
            <div className="cart-info">
                <h6>Item</h6>
                <h6>Name</h6>
                <h6>Qty</h6>
                <h6>Prezzo</h6>
                <button className="btn icon-btn">
                    <MdRemoveShoppingCart onClick={() => deleteAll()} />
                </button>
            </div>
            <hr/>
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