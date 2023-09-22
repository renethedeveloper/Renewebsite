import React, { useState } from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const Felines = () => {
  const [image, setImage] =useState(null)



const handleClick=()=>{
  if(image){
    setImage(null);
  } else {
   setImage("https://wallpapers.com/images/hd/cool-cat-with-sunglasses-b9c8pwh004vdkozm.jpg")
 
}}

  return (
    <div>
        <h1>This is the Felines page</h1>
        Click below for a picture of a cool cat.
        <button onClick={handleClick}  className='felineButton'> {image ? "Ok, enough cool Cat.":"Click me for Cool Cat!"}</button>
        {image && <img className='coolCat' src={image} alt="coolCat" />}


      
    </div>
  )
}

export default Felines;

