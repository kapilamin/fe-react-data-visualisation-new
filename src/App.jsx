import './App.css'
import Header from './components/Header'
import TVSearch from './components/TVSearch'
import TVList from './components/TVList'
import { useState } from 'react'

function App() {

  const [currentSearchTerm, setCurrentSearchTerm] = useState("")

  

  return (
    <>
      <Header />
      <TVSearch setCurrentSearchTerm={ setCurrentSearchTerm }/>
      <TVList currentSearchTerm={ currentSearchTerm }/>
    </>
  )
}

export default App
