import React from "react";
import formatNumber from "../utils/formatNumber";
import { useGlobalContext } from "../context/context";

export default function TotalBox() {
    const {total} = useGlobalContext()
    return (
        <section className="total-container">
            <div className="card">
                <header className="card-header">
                    <h4>Subtotal:</h4>
                </header>
                <div className="cart-content">
                    <h4>{formatNumber(total)}</h4>
                </div>
                <footer className="card-footer">
                    <button className="btn btn-selector">Checkout</button>
                </footer>
            </div>
            
        </section>
    )
}