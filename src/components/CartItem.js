import React from "react";
import formatNumber from "../utils/formatNumber";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
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
                <p className="prd-name"><h6>{name}</h6></p>
                <p className="prd-availability">Availability: {countInStock - qty}</p>
            </div>
            <div className="qty-selector">
                <button className="icon icon-btn">
                    <BiMinus className="icon" onClick={() => checkMinQty(_id)} />
                </button>
                <p className="qty">{qty}</p>
                <button className="icon icon-btn">
                    <BiPlus className="icon" onClick={() => checkMaxQty(_id)} />
                </button>
            </div>
            <p className="price">{formatNumber(price)}</p>
            <button className="btn icon-btn">
                <MdDelete className="icon minus-icon" onClick={() => deleteItem(_id)} />
            </button>
        </article>
    );
};

export default CartItem;