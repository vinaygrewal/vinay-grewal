import React from 'react';
import {BsInfoCircleFill} from "react-icons/bs"
import Page from "../../component/pageHeaderContent/Page";
import { Animate } from 'react-simple-animate';
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact" className='contact'>
     <Page 
     headerText="contact"
     icon={<BsInfoCircleFill size={40}  />}
      />
      <div className='contact__content'>
        <Animate
        play
        duration={1}
        delay={0}
        start={
          {
            transform:"translateX(-200px)"
          }
        }
        end={{ transform:"translateX( 0px)"}}
        >
        <h3 className='contact__content__header-text'>Let's Talk</h3>

        </Animate>
        <Animate
        play
        duration={1}
        delay={0}
        start={
          {
            transform:"translateX(200px)"
          }
        }
        end={{ transform:"translateX( 0px)"}}
        >
        <div className='contact__content__form'>
        <div className='contact__content__form__controlwrapper'>
         
           <div >
           <input required name="name" className='inputName' type="text" />
           <label htmlFor="name" className='nameLabel'>Name</label>
           </div>
           <div >
           <input required name="email" className='inputemail' type="text" />
           <label htmlFor="email" className='emailLabel'>E-Mail</label>
           </div>
           <div >
           <textarea rows="4" required name="description" className='inputdescription' type="text" />
           <label htmlFor="description" className='descriptionLabel'>Description</label>
           </div>
         
        </div>
        <button>Submit</button>

        </div>
        </Animate>
      </div>
     
    </section>
  )
}

export default Contact
