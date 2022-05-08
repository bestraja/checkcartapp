import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import '../App.css';
import Addbutton from './Addbutton';

import { useState } from 'react';
const Navbar = ({addmoviess}) => {
  const [Show,setShow]=useState(true)
  return (
<div className='menu'>

    <div className='barmenu'><button onClick={()=>setShow(!Show)}><FaIcons.FaBars/> </button>
      </div>
{Show ?(
   <ul className='navclass' >
     <li className='lib'><h2><AiIcons.AiOutlineHome/></h2> <h4>Home</h4> </li>
     <li className='lib'><h2><Addbutton addmoviess={addmoviess}/></h2><h4>Add</h4></li>
     
  </ul>):null}
</div>
  )
}

export default Navbar