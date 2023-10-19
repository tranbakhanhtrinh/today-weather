'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useCityAndCountryContext, useLocalStorage } from '@/hooks'
import { ChangeEvent, useState } from 'react'

const Search = () => {
  const { setCityAndCountry } = useCityAndCountryContext()
  const { setItem, getItem } = useLocalStorage()
  const [cityCountry, setCityCountry] = useState({
    city: '',
    country: ''
  })
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCityCountry((pre) => ({ ...pre, [name]: value }))
  }
  const handleSubmitCityCountry = (e: any) => {
    e.preventDefault()
    const { city, country } = cityCountry
    const time = new Date().toLocaleTimeString()
    if (getItem('searchHistory') === null && city && country) {
      const searchArr: any = []
      searchArr.push({
        id: new Date().getTime().toString(),
        date: time,
        city: city.trim(),
        country: country.trim()
      })
      setItem('searchHistory', searchArr)
    } else {
      const arr = getItem('searchHistory')
      arr.push({
        id: new Date().getTime().toString(),
        date: time,
        city: city.trim(),
        country: country.trim()
      })
      setItem('searchHistory', arr)
    }
    setCityAndCountry(cityCountry)
  }
  const clearText = () => {
    setCityAndCountry({
      city: 'ho chi minh city',
      country: 'vn'
    })
    setCityCountry({
      city: '',
      country: ''
    })
  }
  return (
    <section className='px-4'>
      <form
        onSubmit={handleSubmitCityCountry}
        className='block md:flex justify-center items-center gap-4'
      >
        <Input
          type='text'
          id='city'
          name='city'
          label='City:'
          value={cityCountry.city}
          onChange={onChange}
          otherProps={{ required: true }}
        />
        <Input
          type='text'
          id='country'
          name='country'
          label='Country:'
          value={cityCountry.country}
          onChange={onChange}
          otherProps={{ required: true }}
        />
        <Button
          type='submit'
          className='bg-blue-700 text-white py-2 px-3 rounded-md me-4 md:me-0'
          onClick={() => {}}
        >
          Search
        </Button>

        <Button
          type='button'
          className='bg-red-700 text-white py-2 px-3 rounded-md disabled:opacity-50'
          disabled={!(!!cityCountry.city || !!cityCountry.country)}
          onClick={clearText}
        >
          Clear
        </Button>
      </form>
    </section>
  )
}

export default Search
