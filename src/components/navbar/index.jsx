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
    <h1>Welcome to the Renarium!</h1>
    <Link to="/" className='navButtonLink'>Home</Link>
    <Link to="/Display" className='navButtonLink'>Display</Link>
    <Link to="/cats" className='navButtonLink'>Cats</Link>
    <Link to="/about" className='navButtonLink'>About</Link>
    <Link to="/contact" className='navButtonLink'>Contact</Link>
    <Link to="/Random" className='navButtonLink'>RandomCat</Link>
    <button className='navButton'  onClick={handleClick}>{buttonText}<StarTwoToneIcon/></button>
  </div>
  )
}

export default Navbar
