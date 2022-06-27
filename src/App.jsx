
import './App.css'
import QuoteBox from './components/QuoteBox'
import React from 'react'
import users from './json/users.json'


function App() {
  

  return (
    <div className="App">
     <QuoteBox users={users}/> 
    </div>
  )
}

export default App
