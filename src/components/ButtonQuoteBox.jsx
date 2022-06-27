import React from 'react'


const ButtonQuoteBox = ({userRandom,colorRandom,clickBtn}) => {
    const styleButton= {
        backgroundColor:colorRandom
    }
  return (
    <article className='buttonquotebox' style={{color:colorRandom}}>
      <h3>"{userRandom.quote}"</h3>
      <p><i>Author:"{userRandom.author}"</i></p>
      <button onClick={clickBtn} style ={styleButton}>&#62;</button>
    </article>
  )
}

export default ButtonQuoteBox