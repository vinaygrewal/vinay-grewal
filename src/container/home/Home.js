import React from 'react'; 
import "./Home.css";
import {useNavigate} from "react-router-dom";
import { Animate } from 'react-simple-animate';//it is used on hire me button


const Home = () => {
  const navigate =useNavigate();
  // console.log(navigate); //to check what it gives

const navigateToContact=()=>{
  navigate("./contact");

}

  return (
    <section id="home" className='home'>
     <div className='home__text-wrapper'>
     <div>
       <h1>
        <span className='hello'> Hello</span> Namaste ,
         <br />
         I'm 
         </h1>
         <h1 className='name'> Vinay Grewal</h1>
         
      
       </div>

     </div>
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
    {/* //to use that effect we hav to wrap button in that */}
     <div className='home__contactMe'>
     <button onClick={navigateToContact}>Hire Me</button>

     </div>
     </Animate>
     <footer>
        <a className='resume' href="https://drive.google.com/file/d/143C2Q_yfwGvAMl1nobpqfuARbQe_Eg2y/view?usp=share_link">Resume</a>
       
        <ul className='logo__main'>
          <li> <a className="social" href="mailto:vinaygrewal23@gmail.com">
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1792 1408">
           <path fill="currentColor"
            d="M1792 454v794q0 66-47 113t-113 47H160q-66 0-113-47T0 1248V454q44 49 101 87q362 246 497 345q57 42 92.5 65.5t94.5 48t110 24.5h2q51 0 110-24.5t94.5-48T1194 886q170-123 498-345q57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325q-10 7-42.5 30.5t-54 38t-52 32.5t-57.5 27t-50 9h-2q-23 0-50-9t-57.5-27t-52-32.5t-54-38T639 759q-91-64-262-182.5T172 434q-62-42-117-115.5T0 182q0-78 41.5-130T160 0h1472q65 0 112.5 47t47.5 113z" />
           </svg>
           </a>
         </li>
          <li> 
             <a  className="social" href="https://www.linkedin.com/in/vinaygrewal/"> 
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1536 1536"><path fill="currentColor" d="M237 1286h231V592H237v694zm246-908q-1-52-36-86t-93-34t-94.5 34t-36.5 86q0 51 35.5 85.5T351 498h1q59 0 95-34.5t36-85.5zm585 908h231V888q0-154-73-233t-193-79q-136 0-209 117h2V592H595q3 66 0 694h231V898q0-38 7-56q15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288z"/>
             </svg></a>
          </li>
          <li>
           <a className="social" href="https://github.com/vinaygrewal"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1536 1536"><path fill="currentColor" d="M519 1072q4-6-3-13q-9-7-14-2q-4 6 3 13q9 7 14 2zm-28-41q-5-7-12-4q-6 4 0 12q7 8 12 5q6-4 0-13zm-41-40q2-4-5-8q-7-2-8 2q-3 5 4 8q8 2 9-2zm21 23q2-1 1.5-4.5t-3.5-5.5q-6-7-10-3t1 11q6 6 11 2zm86 75q2-7-9-11q-9-3-13 4q-2 7 9 11q9 3 13-4zm42 3q0-8-12-8q-10 0-10 8t11 8t11-8zm39-7q-2-7-13-5t-9 9q2 8 12 6t10-10zm642-317q0-212-150-362T768 256T406 406T256 768q0 167 98 300.5T606 1254q18 3 26.5-5t8.5-20q0-52-1-95q-6 1-15.5 2.5t-35.5 2t-48-4t-43.5-20T468 1073q-23-59-57-74q-2-1-4.5-3.5l-8-8l-7-9.5l4-7.5L415 967q6 0 15 2t30 15.5t33 35.5q16 28 37.5 42t43.5 14t38-3.5t30-9.5q7-47 33-69q-49-6-86-18.5t-73-39t-55.5-76T441 741q0-79 53-137q-24-62 5-136q19-6 54.5 7.5T614 505l26 16q58-17 128-17t128 17q11-7 28.5-18t55.5-26t57-9q29 74 5 136q53 58 53 137q0 57-14 100.5t-35.5 70T992 956t-62.5 26t-68.5 12q35 31 35 95q0 40-.5 89t-.5 51q0 12 8.5 20t26.5 5q154-52 252-185.5t98-300.5zm256-480v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288z"/>
           </svg></a>
           </li>
        </ul>
       </footer>


    </section>
  )
}

export default Home