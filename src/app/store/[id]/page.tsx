import AddTocart from '@/app/components/AddTocart';
import Container from '@/app/components/Container';
import { IGetProduct } from '@/app/typescript/product';
import { formatPrice } from '@/utils/number';
import Image from 'next/image';
import React from 'react'

interface IProductProps {
    params: Promise<{ id: number }>;
    searchParams: Promise<object>;
}

async function Product({ params }: IProductProps) {
    const { id } = await params;

    const result = await fetch(`http://localhost:8001/products/${id}`);
    const data = await result.json() as IGetProduct;

    return (
        <Container>
            <div className='grid grid-cols-12 m-8 shadow-md gap-2 rounded-2xl overflow-hidden'>
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
                <div className='col-span-8'>
                    <h2 className='font-bold text-xl'>{data.title}</h2>
                    <p className='text-gray-600'>{data.description}</p>
                    <p className='font-bold'>قیمت:<span>{formatPrice(data.price ?? 0)}$</span></p>
                    <AddTocart id={id} />
                </div>
            </div>
        </Container>
    )
}

export default Product