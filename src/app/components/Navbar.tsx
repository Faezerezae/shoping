"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Container from './Container';

function Navbar() {
  const pathname = usePathname();

  const navs = [
    {
      title: "خانه",
      href: "/"
    },
    {
      title: "فروشگاه",
      href: "/store"
    },
  ]
  return (
    <div className='p-4 border-b-2'>
      <nav>
        <Container>
        <ul className='flex gap-2'>
          {
            navs?.map(nav => (
              <li key={nav.href}>
                <Link className={nav.href === pathname ? "text-blue-500" : "text-gray-500"} href={nav.href} >{nav.title}</Link>
              </li>
            ))
          }
        </ul>
        </Container>
      </nav>
    </div>
  )
}

export default Navbar