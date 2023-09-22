import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { id } = useParams();

 

  return (
    <div>
      <h1>This is home. For no one. Right now. This is a test.</h1>
      <p>Param ID: {id}</p>
      
    </div>
  );
}

export default Home;
