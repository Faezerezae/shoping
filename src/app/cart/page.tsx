"use client"
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import CartItem from '../components/CartItem'
import { useShoppingCartContext } from '../hooks/useShoppingCartContext'
import axios from 'axios'
import { IGetProduct } from '../typescript/product'
import { formatPrice } from '@/utils/number'

function Cart() {
    const { cartItems } = useShoppingCartContext()
    const [data, setData] = useState<IGetProduct[]>([])
    useEffect(() => {
        axios(`http://localhost:8001/products`).then(result => {
            const { data } = result;
            setData(data);
        })
    }, [])
    return (
        <Container>
            <h1 className='my-4'>سبد خرید</h1>

            <div className="">
                {cartItems.map((item) => (
                    <CartItem {...item} key={item.id} />
                ))}
            </div>
            <div className="shadow-2xl p-4 rounded-2xl mx-auto my-4">
                <h3 className='font-bold'>
                    قیمت کل:
                    <span>
                        {
                            formatPrice(cartItems.reduce((total, item) => {
                                const selectedProduct = data.find((product) => product.id.toString() === item.id.toString());
                                return total + (selectedProduct?.price || 0) * item.qty;
                            }, 0)
                            )}
                        $
                    </span>
                </h3>

                <h3 className='font-bold'>سود شما از این خرید:<span>price$</span></h3>
                <h3 className='font-bold'>قیمت نهایی:<span>price$</span></h3>
                <div>
                    <input className='border' type="text" placeholder='کد تخفیف خود را وارد کنید' />
                    <button className='bg-sky-400 rounded p-2 mx-2'>اعمال</button>
                </div>
            </div>
        </Container>
    )
}

export default Cart