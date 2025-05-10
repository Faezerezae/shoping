"use client"
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React from 'react'
import Container from './Container';
import { useShoppingCartContext } from '../hooks/useShoppingCartContext';
import Cookies from 'js-cookie'

function Navbar() {
  const pathname = usePathname();
  const { cartTotalQty } = useShoppingCartContext()

  const navs = [
    {
      title: "خانه",
      href: "/"
    },
    {
      title: "فروشگاه",
      href: "/store"
    },
    {
      title: "داشبورد",
      href: "/dashboard"
    },
    {
      title: "ورود",
      href: "/login"
    },
  ]
  return (
    <div className='p-4 border-b-2'>
      <nav>
        <Container>
          <div className='flex justify-between items-center'>
            <ul className='flex gap-2'>
              {
                navs?.map(nav => (
                  <li key={nav.href}>
                    <Link className={nav.href === pathname ? "text-blue-500" : "text-gray-500"} href={nav.href} >{nav.title}</Link>
                  </li>
                ))
              }
            </ul>
            <div className="flex gap-2">
              <Link className={"/cart" === pathname ? "text-blue-500" : "text-gray-500"} href="/cart" >
                <div className="flex justify-center items-center">
                  <div className="relative py-2">
                    <div className="t-0 absolute left-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartTotalQty}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </div>
                </div>
              </Link>
              <button onClick={() => {
                Cookies.remove("token")
                redirect("/")
              }} className='ml-4 text-red-600 cursor-pointer'>خروج</button>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  )
}

export default Navbar