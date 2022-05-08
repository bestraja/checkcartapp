import React from 'react'
import * as FaIcons from "react-icons/fa";
import { useState } from 'react';
const Addbutton = ({addmoviess}) => {
    const [Show,setShow]=useState(false)
    const[movie,setmovie]=useState(
    {
        title:'',
        description:'',
        posterUrl:'',
        rate:''

    })
  return (
    <div className='addmovie'>
        <button className='add' onClick={()=>setShow(!Show)}><FaIcons.FaAddressCard/></button>
        {Show ?(
        <div className='addcart'>
            <div className='addcontaint'>
            <buton className='closebutton' onClick={()=>setShow(!Show)} >X</buton>
            <div className='inpucart'>
        <input type='text' placeholder='Enter title' onChange={(e)=>setmovie({...movie,title:e.target.value})}/>
        <input type='text'placeholder='Enter description' onChange={(e)=>setmovie({...movie,description:e.target.value})}/>
        <input type='text' placeholder='Enter image' onChange={(e)=>setmovie({...movie,posterUrl:e.target.value})}/>
        <input type='number' placeholder='Enter rate'onChange={(e)=>setmovie({...movie,rate:e.target.value})}/>
        </div>
        <button  className='buttonadd'onClick={()=>{setShow(!Show);addmoviess(movie);}}>Add To Cart</button>
        

            </div>
           

        </div>):null}
        
        </div>
  )
}

export default Addbutton