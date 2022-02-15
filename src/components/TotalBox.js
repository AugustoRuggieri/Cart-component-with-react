import React from "react";
import { useGlobalContext } from "../context/context";

export default function TotalBox() {
    const {total} = useGlobalContext()
    return (
        <section className="total-section section-center">
            <div className="card">
                <header className="card-header">
                    <h4>Carrello</h4>
                </header>
                <div className="cart-content">
                    <h4>{total}€</h4>
                </div>
                <footer className="card-footer">
                    <button className="btn btn-selector">Checkout</button>
                </footer>
            </div>
            
        </section>
    )
}