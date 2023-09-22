import React from 'react';
import './index.css';
import { useParams } from 'react-router-dom';

const Contact = () => {
  const { id } = useParams();

  return (
    <div className='contactDiv'>
      <h1>How to get in touch</h1>
      <h2>Here is my email</h2>
      <h3>Here is my phone number</h3>
      <p>Param ID: {id}</p> {/* Display the id parameter from the URL */}
    </div>
  );
};

export default Contact;
