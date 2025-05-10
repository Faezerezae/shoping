import React from 'react'
import Container from '../components/Container'
import { IProductList } from '../typescript/product';
import { IGetProduct } from '../typescript/product';
import Link from 'next/link';
import Product from '../components/Product';
import Pagination from '../components/Pagination';
import Search from '../components/Search';


interface IStoreProps {
  params: Promise<object>;
  searchParams: Promise<{ page: number, per_page: number ,title:string }>;
}

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1"
  const per_page = (await searchParams).per_page ?? "2"
  const title = (await searchParams).title ?? ""
  const result = await fetch(`http://localhost:8001/products?_page=${page}&_per_page=${per_page}&title=${title}`, {
    cache: "no-cache"
    //درخواست بعدی بعد از 10 تانیه دیگه ارسال میشه
    // next: {
    //   revalidate: 1
    // }
  });
  const data = await result.json() as IProductList;
  return (
    <Container>
      <div className="p-4">
        <h1 className='text-white py-4'>فروشگاه</h1>
        <Search/>
        <div className='grid grid-cols-4 gap-4'>
          {data.data.map((item: IGetProduct) => (
            <Link href={`/store/${item.id}`} key={item.id}>
              <Product {...item} />
            </Link>
          ))}
        </div>
        <Pagination pageCount={data.pages}/>
      </div>
    </Container>
  )
}

export default Store