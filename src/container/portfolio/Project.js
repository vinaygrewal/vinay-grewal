import React from 'react';

import Page from "../../component/pageHeaderContent/Page";
import {BsInfoCircleFill} from "react-icons/bs";
import tdog from "../../images/tindog.PNG";
import sgame from "../../images/simon_game.PNG";
import gdhaba from "../../images/dhaba.PNG";
import dgame from "../../images/dice-game.PNG";
import mcounter from "../../images/movie_counter.PNG";
import dkit from "../../images/drum-kit.PNG";
import psite from "../../images/personal-site.PNG";
import dtanz from "../../images/digitanz.PNG";
import "./Portfolio.css";
import {useState} from 'react';

const projectData =[
  {id:1,
  name:"TinDog",
  image:tdog,
  category:"Html & Css",
  link:"https://vinaygrewal.github.io/Tin-dog/"
},
{id:2,
  name:"Digi-Tanz",
  image:dtanz,
  category:"Html & Css",
  link:"https://vinaygrewal.github.io/digitanz/"
},
{
  id:3,
  name:"Dhaba",
  image:gdhaba,
  category:"Javascript or ReactJs",
  link:"https://grewaldhaba.vercel.app/"
},

{id:4,
  name:"Movie-Counter",
  image:mcounter,
  category:"Javascript or ReactJs",
  link:"https://movie-counter.vercel.app/"
},
{id:5,
  name:"Drum-Kit",
  image:dkit,
  category:"Javascript or ReactJs",
  link:"https://drum-kit-zeta-seven.vercel.app/"
},
{id:6,
  name:"Personal-Site",
  image:psite,
  category:"Html & Css",
  link:"https://vinaygrewal.github.io/personal-site/"
},
{id:7,
  name:"Simon-Game",
  image:sgame,
  category:"Javascript or ReactJs",
  link:"https://js-simon-game.vercel.app/"
},
{id:8,
  name:"Dice-Game",
  image:dgame,
  category:"Javascript or ReactJs",
  link:"https://dicegame-ten.vercel.app/"
},

]


const uniqueList=[
                   "All",
                         ...new Set(projectData.map((current)=>{  return (current.category)}))]

// console.log(uniqueList)


const Project = () => {
  const [filteredvalue,setFilteredValue]= useState(projectData);
  const [menuList,setMenuList]=useState(uniqueList);

  const[hoveredValue,setHoveredValue]=useState(null); //to give hover effect
  function handleHover(index){
    setHoveredValue(index)
  }//to give hover effect
  console.log(hoveredValue)


function handleFilter(categoryEle){ 
if(categoryEle==="All"){
  return (setFilteredValue(projectData));  
}


  const makeThemAccToButton=projectData.filter((current)=> 
                                  { return  current.category===categoryEle;})


  return(setFilteredValue(makeThemAccToButton))
}

  return (
    <section id="portfolio" className='portfolio'>

    <Page 
     headerText="Project"
     icon={<BsInfoCircleFill size={40}  />}
      
    />   
 <div className='portfolio__content'>
<ul className='portfolio__content__filter'>

  {
    menuList.map( (item) => {
return (<li   onClick={()=> handleFilter(item)}>
 {item}
</li>)

    })

  }
</ul>
<div className='portfolio__content__cards'>
{
  filteredvalue.map((item,index)=>{
    return (
      <div className='portfolio__content__cards__item' key={item.id}    
      
      onMouseEnter={()=>handleHover(index)}  //from these we create hover effect
      onMouseLeave={()=>handleHover(null)} //in these we paas card index
      
      >
         <div className='portfolio__content__cards__item__img-wrapper'>
            <a>
            <img src={item.image} alt="images__of__website" />
            </a>
         </div>
         <div className='overlay'>
         {
          index === hoveredValue && (
            <div>
              <p>{item.name}</p>
              <form action={item.link}><button >Visit</button></form>
              
            </div>
          )
         }

         </div>

      </div>
    )

  })
}


</div>


 </div>
   
   
    </section>
  )
}

export default Project;