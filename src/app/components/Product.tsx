import React from 'react'
import { IGetProduct } from '../typescript/product'
import { formatPrice } from '@/utils/number'
import Image from 'next/image'

function Product({ title, price, image }: IGetProduct) {
    return (
        <div className='shadow-md mx-auto rounded overflow-hidden'>
            <div className="relative w-auto h-[120px] col-end-2">
                <Image
                    src={image}
                    alt={title || 'Product'}
                    fill
                    className="object-cover"
                />
            </div>

            <div className='m-4'>
                <h3>{title}</h3>
                <p>قیمت:<span>{formatPrice(price ?? 0)}$</span></p>
            </div>
        </div>)
}

export default Product