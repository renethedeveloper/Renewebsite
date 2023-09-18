import { useState, useEffect } from "react";
import axios from "axios";

const Random = () => {
  const [catData, setCatData] = useState([]);
  
  const apiKey = process.env.REACT_APP_API_KEY; 

  const generateRandomCat = () => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`;
    axios.get(url)
      .then((response) => {
        console.log(response, response);
        const catData = response.data;
        setCatData(catData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleClick = () => {
    generateRandomCat();
  };

  const getRandomCatName = () => {
    if (catData && catData.length > 0) {
      const randomIndex = Math.floor(Math.random() * catData.length);
      const randomCat = catData[randomIndex];
      return randomCat.breeds[0].name || 'Unknown Breed';
    }
    console.log(catData);
    return 'No Cat Data Available';
  };

  return (
    <div>
      <h2>Random Cat Breed:</h2>
      <p>{getRandomCatName()}</p>
      <button onClick={handleClick}>Get Random Cat</button>
    </div>
  );
};

export default Random;
