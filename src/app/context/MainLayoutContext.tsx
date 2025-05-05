"use client"
import { CartItems, ShoppingCartContext } from '@/app/context/ShoppingCartContext';
import React, { useState } from 'react'
import Navbar from '../components/Navbar';

interface IMainLayoutContextProps {
  children: React.ReactNode;
}

function MainLayoutContext({ children }: IMainLayoutContextProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);


  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0)

  const getProductQty = (id: number) => {
    return cartItems.find(item => item.id == id)?.qty || 0
  }

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      const isNotProductExist = currentItem.find(item => item.id === id) == null;
      if (isNotProductExist) {
        return [...currentItem, { id: id, qty: 1 }]
      }
      else {
        return currentItem.map(item => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 }
          } else {
            return item;
          }
        })
      }
    })
  }
  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      const isLastOne = currentItem.find(item => item.id === id)?.qty == 1;
      if (isLastOne) {
        return currentItem.filter(item => item.id != id)
      }
      else {
        return currentItem.map(item => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 }
          } else {
            return item;
          }
        })
      }
    })
  }

  const handleRemoveProductToCart = (id: number) => {
    setCartItems((currentItem) => {
      return currentItem.filter(item => item.id != id)
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ cartItems, handleIncreaseProductQty, getProductQty, cartTotalQty, handleDecreaseProductQty, handleRemoveProductToCart }}>
      <Navbar />
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default MainLayoutContext