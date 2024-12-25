import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{tittle: "Pushpa 2", release_date: "12-12-2024"}}/>
      <MovieCard movie={{tittle: "Pushpa 2", release_date: "12-12-2024"}}/>
      <MovieCard movie={{tittle: "Pushpa 2", release_date: "12-12-2024"}}/>
      <MovieCard movie={{tittle: "Pushpa 2", release_date: "12-12-2024"}}/>
      <MovieCard movie={{tittle: "Pushpa 2", release_date: "12-12-2024"}}/>
      <MovieCard movie={{tittle: "Pushpa 2", release_date: "12-12-2024"}}/>
    </>
  )
}

export default App
