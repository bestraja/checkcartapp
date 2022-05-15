import React from 'react'
import { useParams } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
const Description = ({movies}) => {
  const params=useParams();
  const movie=movies.find((el)=>el.id===params.id)
  return (
    <div  className='cardis'>
      <Navbar />
      <img src={movie.posterUrl} alt={movie.title}/>
    <div className='part2'>
    <h1>{movie.title}</h1>
    <p><h3>Lien Movie : </h3>{movie.lienvideo}</p>
    
    </div>
    </div>

  )
}

export default Description

