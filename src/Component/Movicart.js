import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';



const Movicart = ({movie}) => {
  return (
    <div className='cart'>
      
      <Link to={`/description/${movie.id}`}>
     <img src={movie.posterUrl} alt={movie.title}/>
   <h1>{movie.title}</h1>
   <p>{movie.descriptiones}</p>
   <button>{movie.rate}</button>
   </Link>
    </div>
  )
}

export default Movicart
