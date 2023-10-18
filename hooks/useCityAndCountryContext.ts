import { CityAndCountryContext } from '@/context/InforContext'
import { useContext } from 'react'

export const useCityAndCountryContext = () => {
  const context = useContext(CityAndCountryContext)
  if (!context)
    throw new Error(
      'useCityAndCountryContext must be used within a CityAndCountryContext'
    )
  return context
}
