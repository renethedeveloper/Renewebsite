import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import Random from '../../pages/randomCat';

const Display = () => {
  const [cats, setCats] = useState([]);
  
  const apiKey = "live_DTrCuJ97kMNFknaUWTNGndHwlkEtIejjqnTQ9QRKhzvp4QkqcZjrbhzMQ04kljHe"

  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`
    axios(url)
      .then((response) => {
        console.log("response", response);
        const catData = response.data 
        console.log(catData);
        setCats(catData);
        
       
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <div>
      {cats.map((cat) => (
        <div key={cat.id}>
          <h2>Breed: {cat.breeds[0].name}</h2>
          <img  className="catPics"src={cat.url} alt={`Breed: ${cat.breeds[0].name}`} />
        </div>
      ))}
    </div>
  );
}

export default Display;
