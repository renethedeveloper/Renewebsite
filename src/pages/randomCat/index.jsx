import { useState, useEffect } from "react";
import axios from "axios";

const Random = () => {
  const [catData, setCatData] = useState([]);
  
  //import key w/ meta syntax
  const apiKey = import.meta.env.VITE_API_KEY;

  const generateRandomCat = () => {
    // Use the apiKey variable to construct the URL
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;
    axios.get(url)
      .then((response) => {
        console.log(response);
        const catData = response.data;
        setCatData(catData);
        console.log("got it");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleClick = () => {
    generateRandomCat();
  };

  const getRandomCatInfo = () => {
    if (catData && catData.length > 0) {
      const randomIndex = Math.floor(Math.random() * catData.length);
      const randomCat = catData[randomIndex];
      const breedName = randomCat?.breeds[0]?.name || 'Unknown Breed';
      const imageUrl = randomCat?.url || ''; // URL of the cat image
      
      return { breedName, imageUrl };
    }
  
    console.log(catData);
    return { breedName: 'No Cat Data Available', imageUrl: '' };
  };
  

  return (
    <div>
      <h2>Random Cat:</h2>
      <p>Breed: {getRandomCatInfo().breedName}</p>
      <img src={getRandomCatInfo().imageUrl} alt="Random Cat" />
      <button onClick={handleClick}>Get Random Cat</button>
    </div>
  );
};

export default Random;
