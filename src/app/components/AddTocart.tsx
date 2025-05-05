"use client"
import React from 'react'
import { useShoppingCartContext } from '../hooks/useShoppingCartContext'
import { MdDelete } from 'react-icons/md'

interface IAddToCartProps {
    id: number
}

function AddTocart({ id }: IAddToCartProps) {
    const { handleIncreaseProductQty, handleDecreaseProductQty, getProductQty, handleRemoveProductToCart } = useShoppingCartContext()
    return (
        <div className='mt-4 flex items-center'>
            <button className='px-4 py-2 rounded bg-sky-500 text-white cursor-pointer' onClick={() => handleIncreaseProductQty(id)}>+</button>
            <span className='mx-4'>{getProductQty(id)}</span>
            <button className='px-4 py-2 rounded bg-sky-500 text-white cursor-pointer' onClick={() => handleDecreaseProductQty(id)}>-</button>
            <button className="text-red-600 text-4xl px-4 py-2 cursor-pointer" onClick={() => handleRemoveProductToCart(id)}><MdDelete /></button>
        </div>
    )
}

export default AddTocart