import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css"
import Random from '../../pages/randomCat';
import { Link, useParams } from 'react-router-dom';
import { Params } from 'react-router-dom';

const Display = ({itemID}) => {
  const params = useParams();
  const [cats, setCats] = useState([]);
  const [catToys, setCatToys] = useState(
    [
      {
        id: 1,
        name: 'Feather Wand Toy',
        description: 'Interactive feather wand toy for play and exercise.',
        price: 9.99,
        image:"https://upco.com/wp-content/uploads/2021/07/Turbo-Feather-Tail-Teaser-Cat-Toy-scaled.jpg"
      },
      {
        id: 2,
        name: 'Catnip Mice Set',
        description: 'A set of catnip-infused toy mice for hours of fun.',
        price: 12.49,
        image:"https://target.scene7.com/is/image/Target/GUEST_8d7422ec-fff6-455a-8111-c9c8d7135197?wid=488&hei=488&fmt=pjpeg"
      },
      {
        id: 3,
        name: 'Interactive Laser Pointer',
        description: 'Interactive laser pointer toy to entertain your cat.',
        price: 7.99,
        image:"https://s.alicdn.com/@sc04/kf/Hb5099bceea124fe081e248c854662321p.jpg_200x200.jpg"
      },
      {
        id: 4,
        name: 'Tunnel Play Mat',
        description: 'Collapsible tunnel play mat for hiding and pouncing.',
        price: 14.99,
        image:"https://m.media-amazon.com/images/I/51En4xaAfIL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 5,
        name: 'Chewy Ball Toys',
        description: 'Set of colorful chewy ball toys for teething kittens.',
        price: 6.99,
        image:"https://image.chewy.com/is/image/catalog/64222_MAIN._AC_SL1500_V1525719538_.jpg"
      },
      {
        id: 6,
        name: 'Cat Tower with Scratching Posts',
        description: 'Multi-level cat tower with scratching posts and perches.',
        price: 49.99,
        image:"https://cdn-aahmh.nitrocdn.com/mwIJloVUffDtKiCgRcivopdgojcJrVwT/assets/images/optimized/rev-8e84975/www.cozycatfurniture.com/image/cache/catalog/sisal-cat-tree-scratching-in-beige-300x300.jpg"
      },
      {
        id: 7,
        name: 'Interactive Treat Dispenser',
        description: 'Interactive treat dispenser toy for mental stimulation.',
        price: 16.99,
        image:"https://m.media-amazon.com/images/I/61QGeHvAyiL._AC_UF1000,1000_QL80_.jpg"
      },
      
    
  ]);
  const apiKey = "live_DTrCuJ97kMNFknaUWTNGndHwlkEtIejjqnTQ9QRKhzvp4QkqcZjrbhzMQ04kljHe";

  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;

    axios(url)
      .then((response) => {
        const catData = response.data;
        setCats(catData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='container'>
      {cats.map((cat) => (
        <div key={cat.id}>
          <h2>Breed: {cat.breeds[0]?.name || 'Unknown'}</h2>
          <img className="catPics" src={cat.url} alt={`Breed: ${cat.breeds[0]?.name}`} />
        </div>
      ))}

      <div className='catToySection'>
        <h3>Check out these cat toys for sale!</h3>
        <div className='catToyGrid'>
          {catToys.map((item) => (
            <div className='catToyCard' key={item.id}>
              <div className='catToyInfo'>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Item ID: {itemID}</p> {/* Display itemID here */}
              </div>
              <img className="catToyImages" src={item.image} alt={item.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;