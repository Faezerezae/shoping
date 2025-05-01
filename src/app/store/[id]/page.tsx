import Container from '@/app/components/Container';
import { IGetProduct } from '@/app/typescript/product';
import React from 'react'

interface IProductProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<object>;
}

async function Product({ params }: IProductProps) {
    const { id } = await params;

    const result = await fetch(`http://localhost:8001/products/${id}`);
    const data = await result.json() as IGetProduct;

    return (
        <Container>
            <div className='grid grid-cols-12 mt-8 shadow-md'>
                <div className='col-end-3'>
                    <img className='' src={data.image} alt="" />
                </div>
                <div className='col-span-9 p-4'>
                    <h2 className='font-bold text-xl'>{data.title}</h2>
                    <p className='text-gray-600'>{data.description}</p>
                    <p className='font-bold'>قیمت:<span>{data.price}$</span></p>
                    <div className='mt-4'>
                        <button className='px-4 py-2 rounded-2xl bg-sky-500 text-white'>+</button>
                        <span className='mx-4'>3</span>
                        <button className='px-4 py-2 rounded-2xl bg-sky-500 text-white'>-</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Product