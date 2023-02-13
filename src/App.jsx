import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Experience from './Experience'
import Card from './Card'
import data from './data'
function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
})
  return (
   <div>
    <Navbar />
    <Hero />
    <Experience/>
    <div className='last-div'>
    {cards}
    </div>
   </div>
  )
}

export default App
