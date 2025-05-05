import React from 'react'
import { IGetProduct } from '../typescript/product'
import { formatPrice } from '@/utils/number'

function Product({ title, price, image }: IGetProduct) {
    return (
        <div className='shadow-md mx-auto'>
            <img src={image} alt="" className='mx-auto' />
            <div className='m-4'>
                <h3>{title}</h3>
                <p>قیمت:<span>{formatPrice(price ?? 0)}$</span></p>
            </div>
        </div>)
}

export default Product