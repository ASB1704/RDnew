import React from 'react'
import { Main } from './Component/Main'
import { Navbar } from './Component/Navbar'
import '../src/Css/App.css'

export const App = () => {
  return (
    <div className='App' >
   <Navbar/>
   <Main/>
    </div>
   
  )
}
