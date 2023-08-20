import React, { useRef, useState } from 'react'
import "./ContactForm.css"
import FormComponent from '../addformComponent/form';

type Props = {}


const ContactForm = (props: Props) => {
    const [isOpen,setIsOpen]=useState<boolean>(false);
   
const handleToggle=()=>{
setIsOpen(!isOpen);
}

    
   

  return (
    <>
{isOpen && <FormComponent />}
    <button  className='contactToggleBtn' onClick={handleToggle}>Add Contact</button>
    </>
  )
}

export default ContactForm



