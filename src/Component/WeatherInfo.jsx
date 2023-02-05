import React from 'react'
import { CurrCityInfo } from './CurrCityInfo'
import { WeatherCards } from './WeatherCards'
import '../Css/WeatherInfo.css'

export const WeatherInfo = () => {
  return (
    <div className='WeatherInfo'>
        <CurrCityInfo/>
        <WeatherCards/>
    </div>
  )
}
