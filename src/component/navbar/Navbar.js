import React,{useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const data=[
    {
        label:"HOME",
        to:"/"
    },
    {
        label:"ABOUT-ME",
        to:"/about"
    },
  
   
    {
        label:"PROJECT",
        to:"/portfolio"
    },
    {
        label:"CONTACT",
        to:"/contact"
    }
]

const Navbar = () => {
    const [toggleIcon,setToggleIcon]=useState(false);

    const handleToggleIcon = ()=> {
        setToggleIcon((current)=> !current)
    }
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar__container'>
                
                   <h2 className='navbar__container__logo'>VINAY <span> GREWAL</span></h2>
               
                <ul className={`navbar__container__menu  ${toggleIcon  ?`targetclass`:""}`}>            {/* by writing classname as {``} it will add in common class */}
                 {
                    data.map((item,key)=>{
                       return (<li key={key} className='navbar__container__menu__item'>
                         <Link to={item.to} className="navbar__container__menu__item__links">
                         {item.label}

                         </Link>
                        </li>)

                    })
                 }
                  
                </ul>
                <div className='nav-icon' onClick={ handleToggleIcon}>
                 {
                toggleIcon? <HiX size={30}/>: <FaBars size={30}/>
                 }
                 </div>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar