import './App.css'
import Header from './components/Header'
import TVSearch from './components/TVSearch'
import TVList from './components/TVList'
import { useState } from 'react'

function App() {

  const [currentSearchTerm, setCurrentSearchTerm] = useState("")
  const [currentRating, setCurrentRating] = useState(0)
  

  return (
    <>
      <Header />
      <TVSearch setCurrentSearchTerm={ setCurrentSearchTerm } setCurrentRating={setCurrentRating}/>
      <TVList currentSearchTerm={ currentSearchTerm } currentRating={currentRating}/>
    </>
  )
}

export default App
