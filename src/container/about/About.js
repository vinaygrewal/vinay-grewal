import React from 'react';
import {BsInfoCircleFill} from "react-icons/bs"
import Page from "../../component/pageHeaderContent/Page"
import { Animate } from 'react-simple-animate';//it is used on hire me button
import "./About.css";

const personalDetails = [
{
  label:"Name",
  value:"Vinay Grewal"
},
{
  label:"Address",
  value:"Hisar,Haryana"
},
{
  label:"Email",
  value:"vinaygrewal23@gmail.com"
},
{
  label:"Contact-No",
  value:"8708563762"
},
];

const jobSummary = "I want to become an successfull IT Professional by gaining technical & non-technical skills continuosly."
const language =[
  {
    value:"Javascript",
  },
  {
    value:"ReactJs"
  },
  {
    value:"J Query"
  },
  {
    value:"CSS"
  },
  {
    value:"NodeJs"
  },
  {
    value:"Bootstrap"
  },
  {
    value:"HTML"
  }
 
]



const About = () => {
  return (
    <section id="about" className='about'>

    <Page
    headerText="About me" 
    icon={<BsInfoCircleFill size={40} />}
    />



    <div className='about__content'>
    <div className='about__content__personalwrapper'>
    
    <Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform:"translateX(-650px)"
    }}
    end={{
      transform:"translateX(0)"
    }}
    >
    <h3 className=''>Front End Developer</h3>
    <p>{jobSummary}</p>
    </Animate>



    <Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform:"translateY(550px)"
    }}
    end={{
      transform:"translateX(0)"
    }}
    >
    <h3 className='personalInformationHeaderText'>Personal Information</h3>
    <ul>
      {personalDetails.map((item,index)=>{
        return(
          <li key={index}>
            <span className='title'>{item.label} : </span>
            <span className='value'>{item.value} </span>
        
          </li>
        )
      })}
    </ul>
    </Animate>
    </div>

    <div className='about__content__skillswrapper'>

    <Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform:"translateX(450px)"
    }}
    end={{
      transform:"translateX(0)"
    }}
    >
    <h3 className='skill__heading'>Skills</h3>
    </Animate>
    <Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform:"translateY(550px)"
    }}
    end={{
      transform:"translateX(0)"
    }}
    >
    <ul>
    {language.map((item,index)=>{
      return(
        <li className='skill__name' key={index}>{item.value}</li>
      )
    }
    )}
      
     
    </ul>
  </Animate >
     </div>
  
  
    </div>

   
    </section>
    
  )
}

export default About;