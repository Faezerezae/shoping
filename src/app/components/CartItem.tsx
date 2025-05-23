import React, { useEffect, useState } from 'react'
import AddTocart from './AddTocart'
import axios from 'axios'
import { IGetProduct } from '../typescript/product'
import { formatPrice } from '@/utils/number'
import Image from 'next/image'
interface ICartItemProps {
    id: number,
    qty: number,
}

function CartItem({ id, qty }: ICartItemProps) {
    const [data, setData] = useState<IGetProduct>()

    useEffect(() => {
        axios(`http://localhost:8001/products/${id}`).then(result => {
            const { data } = result;
            setData(data);
        })
    }, [])


    return (
        <div className='grid grid-cols-12 mt-8 shadow-md overflow-hidden rounded-2xl bg-gray-200 '>
            <div className="relative w-auto h-auto col-end-2">
                {data?.image && (
                    <Image
                        src={data.image}
                        alt={data.title || 'Product'}
                        fill
                        className="object-cover"
                    />

                )}
            </div>

            <div className='col-span-10 p-4'>
                <h2 className='font-bold text-xl'>{data?.title}</h2>
                <p className='font-bold'>قیمت:<span>{formatPrice(data?.price ?? 0)}$</span></p>
                <p className='font-bold'>تعداد:<span>{qty}</span></p>
                <AddTocart id={id} />
            </div>
        </div>)
}

export default CartItem