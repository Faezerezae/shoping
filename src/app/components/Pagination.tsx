"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import ReactPaginate from 'react-paginate'
import "./theme/react-pagination.css";

function Pagination({ pageCount }: { pageCount: number }) {

  const router = useRouter();
  const searchParams = useSearchParams();
  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1
    const currentSearchParams = new URLSearchParams(searchParams.toString());
        currentSearchParams.set("page", page.toString())
        currentSearchParams.set("per_page","2")
        router.push(`/store?${currentSearchParams.toString()}`)
  }
  return (
    <div>
      <ReactPaginate
        className='react-paginate mt-10'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination