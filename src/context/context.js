import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer";
import { ADD_ITEM, DELETE_ITEM, EMPTY_CART, LOADING_DATA, REMOVE_ITEM, TOTAL_PRICE, COUNTER } from "./actions";
import prodotti from "../utils/products";

const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    total: 0,
    itemCounter: 0
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
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

    useEffect(() => {
        dispatch({type: LOADING_DATA, payload: [...prodotti]})
    }, []);

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