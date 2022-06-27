import React, { useState } from 'react'
import ButtonQuoteBox from './ButtonQuoteBox'


const arrayColors= [
  '#A1278A','#E5E437','#2F11B7','#BB4060','#41C94A','#A01420','#1585EC','#573B1C',
  '#DA3C42','#E89ACC','#1C0B07','#E5AA7D','#9CBE0E','#E61766','#B860F6'
]

function QuoteBox  ({users}) {
  const createNumberRandom = array =>{
    return Math.floor(Math.random()*array.length)
  }
  
  const getElementRandom=array=>{
     const i=createNumberRandom(array)
     return array[i]
  }

  const [userRandom, setUserRandom] = useState(getElementRandom(users))
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))
  const clickBtn =()=>{
    setUserRandom(getElementRandom(users))
    setColorRandom(getElementRandom(arrayColors))
      }
  const appStyle={
    backgroundColor:colorRandom}

  return (
    <div style={appStyle} className='quotebox'>
        <ButtonQuoteBox
          userRandom={userRandom}
          colorRandom={colorRandom}
          clickBtn={clickBtn}
        />
    </div>
  )
}

export default QuoteBox