"use client"
import { AppContext } from '@/app/context/AppContext';
import React, { useState } from 'react'
import Navbar from './Navbar';

interface IMainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IMainLayoutProps) {
  const [data] = useState<string>("test");

  return (
    <AppContext.Provider value={{ data }}>
      <Navbar />
      {children}
    </AppContext.Provider>
  )
}

export default MainLayout