import { useState } from 'react'
import Navbar from './navbar'
import Current from './current'
import NextWeek from './nextWeek'
function App() {
  return (
    <div id='app'>
      <Navbar/>
      <Current/>
      <NextWeek/>
    </div>
  )
}

export default App
