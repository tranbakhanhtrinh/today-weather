import React from 'react'
import SearchRecord from '@/components/SearchHistory/SearchRecord'

const SearchHistory = () => {
  return (
    <div className='bg-white h-[400px] w-full md:w-[612px] rounded mx-auto overflow-y-scroll pt-4'>
      <h1 className='text-2xl pb-4 font-bold px-4'>Search History</h1>
      <hr className='mb-4' />
      <SearchRecord />
    </div>
  )
}

export default SearchHistory
