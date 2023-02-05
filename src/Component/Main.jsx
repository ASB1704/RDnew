import React from 'react'
import { Sidebar } from './Sidebar'
import '../Css/Main.css'
import { WeatherInfo } from './WeatherInfo'

export const Main = () => {
  return (
    <div className='Main'>
        <Sidebar/>
        <WeatherInfo/>
    </div>
  )
}
