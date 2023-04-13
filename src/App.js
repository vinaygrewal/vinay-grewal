import React from 'react';
import "./App.css";
// location is used to make animation to limit it only to the single page
import { Route,Routes ,useLocation } from 'react-router-dom';

// for animation
import Particles from 'react-tsparticles'; 
import { loadFull } from 'tsparticles';
//yha particle ka animation store hai
import particles from './particles';

import Home from './container/home/Home';
import About from './container/about/About';


import Project from './container/portfolio/Project';
import Contact from './container/contact/Contact';
import Navbar from './component/navbar/Navbar';

 
const App = () => {
  const location=useLocation( );
  // console.log(location);//to check what we are getting in location
  // //here after checking if path-name is / then we have to render this because as we click on skills pathname changed to /skills


  //ye particle wale ka init method jisse particle ara
  const handleInIt = async (main) => {
    await loadFull(main)
  }

//particle ki lpath location store karli ab isko particle pe condition k lie use krege
const renderParticleJsInHomePage=location.pathname === "/";


  return (
    <div className='main'>
    {/* particle js */}
    {
      renderParticleJsInHomePage &&  <Particles id='particles' options={particles} init={handleInIt} /> 
      //agar iski path "/" ye ho tbhi isko render krna means only render it in home page
    }
    {/* this tsparticles will take full width so u have to make other things sticky */}


        <Navbar/>


        
        <div className='containerElement'>
         {/* main page container */}
         <Routes>
         <Route index path="/" element={<Home/>} />
         <Route  path="/about" element={<About/>} />
     
        
         <Route  path="/portfolio" element={<Project/>} />
         <Route  path="/contact" element={<Contact/>} />
         </Routes>
         </div>
    
    </div>
  )
}

export default App
