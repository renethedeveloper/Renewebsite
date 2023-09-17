import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Navbar from './components/navbar';
import Home from './pages/home';
import About from './components/about';
import Contact from './pages/contact';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import Display from './components/display';
import Random from './pages/randomCat';
import Cats from './pages/cats';



function App() {
  let star = StarTwoToneIcon
  return (
    <Router>
      <div>
        <Navbar /> 
       
        <Routes>
          <Route path="/navbar" element={<Navbar star ={star}/>} />
          <Route path='/' element={<Home star ={star}/>} />
          <Route path="/About" element={<About star ={star} />} />
          <Route path="/Contact" element={<Contact star ={star} />} />
          <Route path='/Display' element={<Display/>}/>
          <Route path='/Random' element={<Random/>} />
          <Route path='/cats' element = {<Cats/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
