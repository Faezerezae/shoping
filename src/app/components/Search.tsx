"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter();
    const searchParams = useSearchParams()

    const handleSearch = () => {
        const currentSearchParams = new URLSearchParams(searchParams.toString());
        currentSearchParams.set("title", search)
        router.push(`/store?${currentSearchParams.toString()}`)
    }
    return (
        <div className='flex gap-1 mb-4'>
            <input
                onChange={(e) => setSearch(e.target.value)} value={search}
                placeholder='جستجو'
                type="text"
                name="search"
                id="search"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
            />
            <button
                type="button"
                onClick={handleSearch}
                className="inline-flex items-center gap-2 px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <BiSearch className="-ml-0.5 mr-2 h-4 w-4" />
                جستجو
            </button>
        </div>
    )
}

export default Search