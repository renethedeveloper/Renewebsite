import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './components/about';
import Contact from './pages/contact';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import Random from './pages/randomCat';
import Cats from './pages/cats';
import Felines from './pages/felines';
import SingleProduct from './components/SingleProduct';
import Products from "./components/Products"
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  let star = StarTwoToneIcon;
  const [cats, setCats] = useState([]);
  const [catToys, setCatToys] = useState(
    [
  {
    id: 1,
    name: 'Feather Wand Toy',
    description: 'Interactive feather wand toy for play and exercise.',
    description2: 'Entertain your cat with this feather wand toy, designed to mimic the movements of birds and insects, encouraging your cat to jump and pounce. Its a great way to provide physical and mental stimulation for your feline friend.',
    price: 9.99,
    image: 'https://upco.com/wp-content/uploads/2021/07/Turbo-Feather-Tail-Teaser-Cat-Toy-scaled.jpg',
  },
  {
    id: 2,
    name: 'Catnip Mice Set',
    description: 'A set of catnip-infused toy mice for hours of fun.',
    description2: 'These adorable toy mice are filled with premium catnip to drive your cat wild. Watch as your cat bats, tosses, and chases these toys for hours of entertainment and exercise.',
    price: 12.49,
    image: 'https://target.scene7.com/is/image/Target/GUEST_8d7422ec-fff6-455a-8111-c9c8d7135197?wid=488&hei=488&fmt=pjpeg',
  },
  {
    id: 3,
    name: 'Interactive Laser Pointer',
    description: 'Interactive laser pointer toy to entertain your cat.',
    description2: 'Keep your cat engaged and active with this interactive laser pointer. Simply point the laser on the floor or wall, and watch as your cat chases and pounces on the elusive red dot.',
    price: 7.99,
    image: 'https://s.alicdn.com/@sc04/kf/Hb5099bceea124fe081e248c854662321p.jpg_200x200.jpg',
  },
  {
    id: 4,
    name: 'Tunnel Play Mat',
    description: 'Collapsible tunnel play mat for hiding and pouncing.',
    description2: 'This collapsible tunnel provides a perfect hide-and-seek spot for your cat. With crinkly fabric and peek-a-boo holes, its an exciting play area for your furry friend. Its designed for cats who love to explore and have fun.',
    price: 14.99,
    image: 'https://m.media-amazon.com/images/I/51En4xaAfIL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 5,
    name: 'Chewy Ball Toys',
    description: 'Set of colorful chewy ball toys for teething kittens.',
    description2: 'These soft and colorful chewy ball toys are perfect for teething kittens. The textured surface helps soothe their gums while providing endless entertainment. Theyre lightweight and easy for kittens to bat around.',
    price: 6.99,
    image: 'https://image.chewy.com/is/image/catalog/64222_MAIN._AC_SL1500_V1525719538_.jpg',
  },
  {
    id: 6,
    name: 'Cat Tower with Scratching Posts',
    description: 'Multi-level cat tower with scratching posts and perches.',
    description2: 'Give your cat a space to climb, scratch, and play with this multi-level cat tower. It features built-in scratching posts and cozy perches for your cat to enjoy. This tower is designed for active and playful cats.',
    price: 49.99,
    image: 'https://cdn-aahmh.nitrocdn.com/mwIJloVUffDtKiCgRcivopdgojcJrVwT/assets/images/optimized/rev-8e84975/www.cozycatfurniture.com/image/cache/catalog/sisal-cat-tree-scratching-in-beige-300x300.jpg',
  },
  {
    id: 7,
    name: 'Interactive Treat Dispenser',
    description: 'Interactive treat dispenser toy for mental stimulation.',
    description2: "Keep your cat mentally stimulated with this interactive treat dispenser. Load it with your cats favorite treats and watch as they work to get the tasty rewards. It's a great way to challenge and entertain your cat.",
    price: 16.99,
    image: 'https://m.media-amazon.com/images/I/61QGeHvAyiL._AC_UF1000,1000_QL80_.jpg',
  },
]
);
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
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Home star={star} />} />
          <Route path="/Felines" element={<Felines />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact star={star} />} />
          <Route path="/Products" element={<Products catToys={catToys} cats={cats} />} />
          <Route path="/Products/:itemID" element={<SingleProduct catToys={catToys}/>} />
           <Route path="/Random" element={<Random />} />
          <Route path="/cats" element={<Cats />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
