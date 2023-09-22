import React from 'react'
import { Link, useParams } from 'react-router-dom';

const About = () => {
  const { id } = useParams();

  return (
    <div className='about'>
      <h1>About</h1>
      <p>{`This is the about page. My name is Rene Rodriguez and I am a budding software engineer/UX designer. My interests are cats, boxing, travel, food, literature, and building and designing cool applications. I am still learning  so bare with me. I tried to add Params to this page but I wasn't even sure what the hell they were. ${id}`}</p>

     
      <Link to="/Felines">
        <button>Click here for Felines</button>
      </Link>

      <p></p>
    </div>
  )
}

export default About;
