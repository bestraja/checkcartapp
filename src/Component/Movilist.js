import React from 'react'
import '../App.css';
import Movicart from './Movicart';
const Movilist=({movies,text,rate}) => {
  return (
    <div className='list'>
    {
    movies
    
    .filter((el)=>el.title.toLowerCase().includes(text.toLowerCase())||el.rate===rate)
    .map((el)=><Movicart movie={el}/>)
    
    
  } 
    </div>
  );
};

export default Movilist