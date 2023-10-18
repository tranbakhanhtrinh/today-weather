'use client'
import { useCityAndCountryContext, useFetchWeather } from '@/hooks'
import Image from 'next/image'
import Loading from '@/components/Loading'

const WeatherCard = () => {
  const { cityAndCountry } = useCityAndCountryContext()
  const { data, isError, isFetching, isLoading, error } = useFetchWeather(
    cityAndCountry.city,
    cityAndCountry.country
  )
  if (isError) {
    return (
      <section className='mb-4 h-auto md:h-[400px] block md:flex justify-center items-center'>
        <h1 className='border-red-600 border-solid border-[1px] font-bold bg-red-200 p-1 mb-4 px-8'>
          {error instanceof Error && error.message}
        </h1>
      </section>
    )
  }
  if (isLoading || isFetching) {
    return (
      <section className='mb-4 h-auto md:h-[400px] relative'>
        <Loading />
      </section>
    )
  }
  return (
    <section className='mb-4 h-auto md:h-[400px]'>
      <div className='text-black'>
        <div className='block w-full md:w-[612px] rounded-[25px] mx-auto my-0 py-[2rem] bg-white'>
          <div className='pb-[2rem] flex justify-center flex-col items-center'>
            <h1 className='text-[40px] font-bold mb-4'>
              {data?.name}, {data?.sys.country}
            </h1>
            <Image
              src={`https://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
              width={100}
              height={100}
              alt='weather icon'
            />
          </div>
          <div className='block sm:flex gap-4 justify-center items-center px-4 sm:px-auto'>
            <div className='w-full sm:w-[50%] m-0 mb-4 sm:mb-0 flex justify-center items-center'>
              <h1 className='text-[40px]'>
                {data?.main.temp.toFixed(0)}
                <sup>&deg;</sup>
                <span>C</span>
              </h1>
            </div>

            <div className='w-full sm:w-[50%] flex items-center gap-8'>
              <div>
                <p className='font-bold'>Description</p>
                <p className='font-bold'>Temperature</p>
                <p className='font-bold'>Humidity</p>
                <p className='font-bold'>Sunrise</p>
                <p className='font-bold'>Sunset</p>
              </div>
              <div>
                <p className='capitalize'>{data?.weather[0].description}</p>
                <p>
                  {data?.main.temp_min.toFixed(2)}
                  <sup>&deg;</sup>C ~{data?.main.temp_max.toFixed(2)}
                  <sup>&deg;</sup>C
                </p>
                <p>{data?.main.humidity}%</p>
                <p>{new Date(data?.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>{new Date(data?.sys.sunset * 1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherCard
