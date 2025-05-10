"use client"
import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import CartItem from '../components/CartItem'
import { useShoppingCartContext } from '../hooks/useShoppingCartContext'
import axios from 'axios'
import { IGetProduct } from '../typescript/product'
import { formatPrice } from '@/utils/number'
import { TDiscounts } from '../typescript/discounts'

function Cart() {
    const { cartItems } = useShoppingCartContext()
    const [data, setData] = useState<IGetProduct[]>([])
    const [discountCode, setDiscountCode] = useState("")
    const [discountPrice, setDiscountPrice] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    useEffect(() => {
        axios(`http://localhost:8001/products`).then(result => {
            const { data } = result;
            setData(data);
        })
    }, [])

    const totalPrice: number = cartItems.reduce((total, item) => {
        const selectedProduct = data.find((product) => product.id.toString() === item.id.toString());
        return total + (selectedProduct?.price || 0) * item.qty;
    }, 0);

    const handleSubmitDiscount = () => {
        axios(`http://localhost:8001/discounts?code=${discountCode}`).then(result => {
            const data = result.data as TDiscounts;
            const discountPrice = totalPrice * data[0].percentage / 100;
            const finalPrice = totalPrice - discountPrice;
            setDiscountPrice(discountPrice);
            setFinalPrice(finalPrice);
        })
    }
    return (
        <Container>
            <div className="p-4">
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
                            {formatPrice(totalPrice)}$
                        </span>
                    </h3>
                    <h3 className='font-bold'>سود شما از این خرید:<span>{formatPrice(discountPrice)}$</span></h3>
                    <h3 className='font-bold'>قیمت نهایی:<span>{formatPrice(finalPrice)}$</span></h3>
                    <div>
                        <input className='border' type="text" placeholder='کد تخفیف خود را وارد کنید' onChange={(e) => setDiscountCode(e.target.value)} />
                        <button className='bg-sky-400 rounded p-2 mx-2' onClick={handleSubmitDiscount}>اعمال</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Cart