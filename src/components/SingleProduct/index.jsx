import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Products from '../Products';
import { useState } from 'react';


const SingleProduct = ({ catToys }) => {
  const { itemID } = useParams();
  console.log(itemID)

  // Find the product with the matching itemID
  const product = catToys.find(item => item.id === parseInt(itemID, 10));

  if (!product) {
    // Handle the case where the product with the given itemID is not found
    return <div>Product not found</div>;
  }

  return (
    <div className='singleProduct'>
      <h2>Single Product</h2>
      <h4>Product {itemID}</h4>
      <h4>{product.name}</h4>
      <Link to="/Products">Back to Products</Link><br />
    </div>
  );
};

export default SingleProduct;
