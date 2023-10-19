import Header from '@/components/Header'
import ReactQueryProvider from '@/components/Provider/ReactQueryProvider'
import Search from '@/components/Search'
import SearchHistory from '@/components/SearchHistory'
import WeatherCard from '@/components/WeatherCard'
import { CityAndCountryContextProvider } from '@/context/InforContext'

export default function Home() {
  return (
    <main className='h-full'>
      <ReactQueryProvider>
        <CityAndCountryContextProvider>
          <Header />
          <Search />
          <div className='block lg:flex lg:gap-4 xl:container xl:mx-auto'>
            <WeatherCard />
            <SearchHistory />
          </div>
        </CityAndCountryContextProvider>
      </ReactQueryProvider>
    </main>
  )
}
