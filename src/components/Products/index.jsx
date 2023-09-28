import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./index.css"
import SingleProduct from '../SingleProduct';

const Products = ({ cats, catToys }) => {
  const { itemID } = useParams();

  // Find the selected cat toy based on itemID
  const selectedCatToy = catToys.find((product) => product.id === Number(itemID));

  return (
    <div className='container'>
     
      {/* {cats.map((cat) => (
        <div key={cat.id}>
          <h2>Breed: {cat.breeds[0]?.name || 'Unknown'}</h2>
          <img className="catPics" src={cat.url} alt={`Breed: ${cat.breeds[0]?.name}`} />
        </div>
      ))} */}

      <h2 className='catToyTitle'>Cat Toys for Sale</h2>
      <div className="catToySection">
        {catToys.map((product) => (
          <Link to={`/Products/${product.id}`} key={product.id}>
          <div className="catToyCard" key={product.id}>
            <div className='catToyInfo'>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
            <img className="catToyImages" src={product.image} alt={product.id} />
          </div>
          </Link>
        ))}
      </div>

      
      {selectedCatToy && (
        <div className='selectedCatToy'>
          <h2>Selected Cat Toy</h2>
          <div className="catToyCard">
            <div className='catToyInfo'>
              <h4>{selectedCatToy.name}</h4>
              <p>{selectedCatToy.description}</p>
              <p>Price: ${selectedCatToy.price}</p>
            </div>
            <img className="catToyImages" src={selectedCatToy.image} alt={selectedCatToy.id} />
          </div>
        </div>
        
      )}
      
    </div>
  );
};

export default Products;



 