import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import '../App.css';
import logo from './logo.jpg';
const Header = ({settext,setrate}) => {
  return (
    <div className='headclass'>
        <img src={logo}  alt="logo" />
        <div className='search'>
        <input type="text"  placeholder='Search By Title...'onChange={(e)=>settext(e.target.value)}/>
        <div className='iconserch'><h1><AiIcons.AiOutlineSearch/></h1></div>
        <input type="text"  placeholder='Search By Rate...'onChange={(e)=>setrate(e.target.value)}/>
        <div className='iconserch'><h1><AiIcons.AiOutlineFilter/></h1>

        </div>
        </div>
    </div>
  )
}

export default Header