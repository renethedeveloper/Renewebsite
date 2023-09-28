import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Products from '../Products';
import { useState } from 'react';


const SingleProduct = ({ catToys }) => {
  const { itemID } = useParams();
  console.log(itemID)

  //match catToy with id
  const product = catToys.find(item => item.id === parseInt(itemID, 10));

  if (!product) {
   //what if product isn't found?
    return <div>Product not found</div>;
  }

  return (
    <div className='singleProduct'>
      {/* <h2>Single Product</h2> */}
      {/* <h4>Product {itemID}</h4> */}
      <h3>{product.name}</h3>
      <h4 >{product.description2}</h4>
      <img style={{ maxWidth: "300px" }} src={product.image} alt={product.image} />

      <Link to="/Products">Back to Products</Link><br />
    </div>
  );
};

export default SingleProduct;
