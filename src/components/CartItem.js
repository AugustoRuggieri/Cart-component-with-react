import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context/context";

const CartItem = ({_id, name, image, price, qty, countInStock}) => {

    const {deleteItem, addItem, removeItem} = useGlobalContext();

    const checkMaxQty = (_id) => {
        if(qty + 1 > countInStock) {
            return
        }
        return addItem(_id)
    }

    const checkMinQty = (_id) => {
        if(qty - 1 < 0) {
            return
        }
        return removeItem(_id)
    }
    
    return (
        <article className="cart-item">
            <div className="img-container">
                <img src={image} alt="name" className="img"/>
            </div>
            <p className="prd-name">{name}</p>
            <div className="qty-selector">
                <button className="icon icon-btn">
                    <BiMinus className="icon" onClick={() => checkMinQty(_id)} />
                </button>
                <p>{qty}</p>
                <button className="icon icon-btn">
                    <BiPlus className="icon" onClick={() => checkMaxQty(_id)} />
                </button>
            </div>
            <p>{price}€</p>
            <button className="btn icon-btn">
                <MdDelete className="icon minus-icon" onClick={() => deleteItem(_id)} />
            </button>
        </article>
    );
};

export default CartItem;