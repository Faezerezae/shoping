import React from 'react'
import Container from './components/Container'
import Link from 'next/link'
import { IGetProduct } from './typescript/product'
import Product from './components/Product'

async function Home() {
  const result = await fetch("http://localhost:8001/products", {
    // cache: "no-cache"
    //درخواست بعدی بعد از 10 تانیه دیگه ارسال میشه
    next: {
      revalidate: 1
    }
  });
  const data = await result.json();
  return (
    <Container>
      <h1 className='text-white py-4'>خانه</h1>
      <div className='grid grid-cols-4 gap-4'>
        {data.map((item: IGetProduct) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <Product {...item} />
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Home