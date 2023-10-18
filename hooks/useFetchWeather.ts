import { useQuery } from 'react-query'
import { api } from '@/helpers/axios'

const fetchWether = async ({ queryKey }: any) => {
  try {
    const city = queryKey[1]
    const country = queryKey[2]
    const response = await api.get(`/weather?q=${city},${country}&units=metric`)
    return response.data
  } catch (error) {
    throw new Error('Not found')
  }
}

export const useFetchWeather = (city: string, country: string) =>
  useQuery(['weather', city, country], fetchWether, {
    refetchOnWindowFocus: false,
    retry: false
  })
