"use client";
import { createContext } from "react";

export type CartItems = {
    id: number;
    qty: number
}

type TShoppingCartContext = {
    cartItems: CartItems[],
    handleIncreaseProductQty: (id: number) => void,
    handleDecreaseProductQty: (id: number) => void,
    handleRemoveProductToCart: (id: number) => void,
    getProductQty: (id: number) => number,
    cartTotalQty: number
}

export const ShoppingCartContext = createContext({} as TShoppingCartContext)

