'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'

type CityAndCountryValueType = {
  city: string
  country: string
}

type CityAndCountryContextType = {
  cityAndCountry: CityAndCountryValueType
  setCityAndCountry: Dispatch<SetStateAction<CityAndCountryValueType>>
}

export const CityAndCountryContext =
  createContext<CityAndCountryContextType | null>(null)

export const CityAndCountryContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [cityAndCountry, setCityAndCountry] = useState<CityAndCountryValueType>(
    {
      city: 'ho chi minh city',
      country: 'vn'
    }
  )
  return (
    <CityAndCountryContext.Provider
      value={{ cityAndCountry, setCityAndCountry }}
    >
      {children}
    </CityAndCountryContext.Provider>
  )
}
