import React from "react";
import formatNumber from "../utils/formatNumber";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import "./cartitem.css";

const CartItem = ({ _id, name, image, price, qty, countInStock }) => {

    const { deleteItem, addItem, removeItem } = useGlobalContext();

    const checkMaxQty = (_id) => {
        if (qty + 1 > countInStock) {
            return
        }
        return addItem(_id)
    }

    const checkMinQty = (_id) => {
        if (qty - 1 < 1) {
            return
        }
        return removeItem(_id)
    }

    return (
        <article className="cart-item">
            <div className="img-container">
                <img src={image} alt="name" className="img" />
            </div>
            <div className="prd-info">
                <h3 className="prd-name">{name}</h3>
                <p className="prd-availability">Remaining: {countInStock - qty}</p>
                <div className="qty-selector">
                    <button className="icon-btn">
                        <BiMinus className="icon" onClick={() => checkMinQty(_id)} />
                    </button>
                    <p className="qty">{qty}</p>
                    <button className="icon-btn">
                        <BiPlus className="icon" onClick={() => checkMaxQty(_id)} />
                    </button>
                </div>
                <p className="remove-btn" onClick={() => deleteItem(_id)}>Remove</p>
            </div>
            <div className="price-wrapper">
                <p className="price">{formatNumber(price)}</p>
            </div>

        </article>
    );
};

export default CartItem;