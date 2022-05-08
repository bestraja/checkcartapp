import React from 'react'
import '../App.css';

const Movicart = ({movie}) => {
  return (
    <div className='cart'>
     <img src={movie.posterUrl} alt={movie.title}/>
   <h1>{movie.title}</h1>
   <p>{movie.description}</p>
   <button>{movie.rate}</button>
    </div>
  )
}

export default Movicart
