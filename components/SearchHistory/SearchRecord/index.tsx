'use client'
import Button from '@/components/Button'
import { useCityAndCountryContext, useLocalStorage } from '@/hooks'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type SearchRecordProps = {
  id: string
  city: string
  country: string
  date: string
}

const SearchRecord = () => {
  const { cityAndCountry, setCityAndCountry } = useCityAndCountryContext()
  const { getItem, setItem } = useLocalStorage()
  const [list, setList] = useState<SearchRecordProps[]>([])

  useEffect(() => {
    const historyArr = getItem('searchHistory')
    if (historyArr) setList(historyArr)
  }, [cityAndCountry.city, cityAndCountry.country])

  if (list.length === 0) {
    return (
      <h1 className='text-center font-bold text-slate-500 text-[2rem]'>
        No Record
      </h1>
    )
  }
  const handleDelete = (id: string) => {
    const filteredList = list.filter((ele: { id: string }) => ele.id !== id)
    setList(filteredList)
    setItem('searchHistory', filteredList)
  }

  const handleClickHistory = (city: string, country: string) => () => {
    setCityAndCountry({ city, country })
  }

  const historyList = list.map(
    ({ id, date, city, country }: SearchRecordProps, index: number) => (
      <div
        key={id}
        className='mb-4 px-4'
      >
        <div className='flex justify-between items-center '>
          <p
            className='mb-4 cursor-pointer hover:text-red-500 transition-all duration-500 ease-in-out'
            onClick={handleClickHistory(city, country)}
          >
            {index + 1}.{' '}
            <span className='capitalize'>
              {city}, {country}
            </span>
          </p>
          <div className='flex items-center gap-3'>
            <p className='mb-4'>{date}</p>
            <Button
              type='button'
              className='bg-gray-300 rounded-full p-1'
              onClick={handleClickHistory(city, country)}
            >
              <Image
                src='/assets/images/search.svg'
                alt='search icon'
                width={20}
                height={20}
              />
            </Button>
            <Button
              type='button'
              className='bg-gray-300 rounded-full p-1'
              onClick={() => handleDelete(id)}
            >
              <Image
                src='/assets/images/delete.svg'
                alt='delete icon'
                width={20}
                height={20}
              />
            </Button>
          </div>
        </div>
        <hr />
      </div>
    )
  )

  return historyList
}

export default SearchRecord
