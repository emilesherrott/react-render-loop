import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css"

import { BeerDisplay } from './components'

const App = () => {

  const [beers, setBeers] = useState([])
  useEffect(() => {
    const getBeers = async () => {
      const { data } = await axios.get("https://api.punkapi.com/v2/beers")
      setBeers(data)
    }
    getBeers()
  }, [])


  return (
    <>
    <h1>Punk API Beers</h1>
    <BeerDisplay beers={beers}/>
    </>
  )
}

export default App