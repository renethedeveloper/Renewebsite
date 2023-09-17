import React from 'react';


const Random = (props) => {
  const { catData } = props;

  const getRandomCatName = () => {
    if (catData && catData.length > 0) {
      const randomIndex = Math.floor(Math.random() * catData.length);
      const randomCat = catData[randomIndex];
      
      return randomCat.breeds[0].name || 'Unknown Breed';
     
    }
    console.log(catData)
    return 'No Cat Data Available';
    
    
  };

  return (
    <div>
      <h2>Random Cat Breed:</h2>
      <p>{getRandomCatName()}</p>
     
    </div>
  );
};

export default Random;
