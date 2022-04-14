import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";
import { ADD_ITEM, DELETE_ITEM, EMPTY_CART, LOADING_DATA, REMOVE_ITEM, TOTAL_PRICE, COUNTER } from "./actions";
import itemList from "../utils/products";

const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    total: 0,
    itemCounter: 0
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    // Qui definisco useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    const deleteItem = (_id) => {
        dispatch({type: DELETE_ITEM, payload: _id})
    }

    const deleteAll = () => {
        dispatch({ type: EMPTY_CART })
    }

    const addItem = (_id) => {
        dispatch({type: ADD_ITEM, payload: _id})
    }

    const removeItem = (_id) => {
        dispatch({type: REMOVE_ITEM, payload: _id})
    }

    // Questo useEffect viene richiamato al primo rendering e invia al reducer la lista dei prodotti
    useEffect(() => {
        dispatch({type: LOADING_DATA, payload: [...itemList]})
    }, []);

    // Questo useEffect viene richiamato al variare della quantità dei prodotti per aggiornare il prezzo totale e il numero dei prodotti
    useEffect(() => {
        dispatch({type: TOTAL_PRICE});
        dispatch({type: COUNTER})
    }, [state.products]);

    return <AppContext.Provider value={{
        ...state,
        deleteItem,
        deleteAll,
        addItem,
        removeItem
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext }