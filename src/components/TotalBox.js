import React from "react";
import formatNumber from "../utils/formatNumber";
import { useGlobalContext } from "../context/context";

export default function TotalBox() {

    const {total} = useGlobalContext()

    return (
        <section className="total-container">
            <div className="card" id="total-card">
                <header>
                    <h4>Subtotal:</h4>
                </header>
                <div className="cart-content">
                    <h4>{formatNumber(total)}</h4>
                </div>
                <footer>
                    <button className="btn btn-selector" id="checkout-btn">Checkout</button>
                </footer>
            </div>
            
        </section>
    )
}