import React from 'react'
import { IGetProduct } from '../typescript/product'

function Product({ title, price, image }: IGetProduct) {
    return (
        <div className='shadow-md mx-auto'>
            <img src={image} alt="" className='mx-auto'/>
            <div className='m-4'>
                <h3>{title}</h3>
                <p>قیمت:<span>{price}$</span></p>
            </div>

        </div>)
}

export default Product