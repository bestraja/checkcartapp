import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import imag1 from './imag1.jpg'
import imag2 from './imag2.jpg'
import imag3 from './imag3.jpg'
import imag4 from './imag4.jpg'
const slideImages = {
    duration:5000,
    transitionDuration:500,
    Infinite:true,
    indicators:true,
    arrows:true
}
const Slideshow= () => {
  return (
    <div className='containerslide'>
       <Slide {...slideImages}>
           <div className='eachslid'>
                <div><img src={imag1} alt='image1'/></div>
            </div>
            <div className='eachslid'>
                <div><img src={imag3} alt='image3'/></div>
            </div>
            <div className='eachslid'>
                <div><img src={imag2} alt='image2'/></div>
            </div>
            <div className='eachslid'>
                <div><img src={imag4} alt='image4'/></div>
            </div>
      </Slide>
   </div>

  )
}

export default Slideshow
