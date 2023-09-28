import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { id } = useParams();

  const handleChange=()=>{
    
  }
 

  return (
    <div>
      <form action="">
        <h3>Hello! Welcome to the Renarium! Tell us your name!</h3>
        <input onChange={handleChange} style={{ backgroundColor: 'white' }} type="text" />

        <button>Submit</button>
      </form>
      <h1>This is home. For no one. Right now. This is a test.</h1>
     
      
    </div>
  );
}

export default Home;
