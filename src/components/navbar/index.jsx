import React, { useState } from 'react';
import "./index.css"
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick=()=>{
        setIsClicked(!isClicked)
        
}

const buttonText = isClicked ? "Deactivate" : "Activate"

    const backgroundColor = isClicked ? "lightblue":"lightgreen" 
    
  return (
    <div  style={{backgroundColor}}className='navbar'>
      <div className='title_div'>
    <h1>Welcome to the Renarium!</h1>
    </div>
    <div className='links'>
    <Link to="/" className='navButtonLink'>Home</Link>
    <Link to="/Products" className='navButtonLink'>Products</Link>
    <Link to="/cats" className='navButtonLink'>Cats</Link>
    <Link to="/about" className='navButtonLink'>About</Link>
    <Link to="/contact" className='navButtonLink'>Contact</Link>
    <Link to="/Random" className='navButtonLink'>RandomCat</Link>
    <button className='navButton'  onClick={handleClick}>{buttonText}<StarTwoToneIcon/></button>
    </div>
  </div>
  )
}

export default Navbar
