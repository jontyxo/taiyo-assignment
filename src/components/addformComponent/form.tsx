import React, { useRef, useState } from 'react'
import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactSlice';
import "./form.css"
import { relative } from 'path';
type Props = {}


const FormComponent = (props: Props) => {
    const [isOpen,setIsOpen]=useState<boolean>(true);
   
    const handleToggle=()=>{
    setIsOpen(!isOpen);
    if(isOpen===false){
        setTimeout(()=>{
            setIsOpen(!isOpen);
        },1)
    }
    }
    const fnameRef=useRef<HTMLInputElement>(null);
    const lnameRef=useRef<HTMLInputElement>(null);
    const numberRef=useRef<HTMLInputElement>(null);
    const emailRef=useRef<HTMLInputElement>(null);
    const addressRef=useRef<HTMLInputElement>(null);
    
    const contacts = useAppSelector(state => state.contact.contacts);
const dispatch=useDispatch();
const handleAddContact=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
        console.log(fnameRef.current?.value)
        const fname=fnameRef.current?.value
        const lname=lnameRef.current?.value
        const phone=numberRef.current?.value
        const email=emailRef.current?.value
        const address=addressRef.current?.value

        dispatch(addContact({fname,lname,phone,email,address}))
        window.location.href = "https://assignment-taiyo-eta.vercel.app/";
    }
  return (
   <>
          {isOpen && 
            <div className="modalContact">
            
    <div className='addContact'><span className='addcontacthead'>Add Contact</span>
        <form  className='contactform' onSubmit={handleAddContact}> 
        <label>First name</label>
        <input className='contactforminput' ref={fnameRef} type="text" name="firstName"  required={true}/>
        <label>Last name</label>
        
            <input className='contactforminput' ref={lnameRef} type="text" name="lastName"  required={true}/>
            <label>Phone Number</label>
        
            <input className='contactforminput' ref={numberRef} type="number" name="number"  required={true}/>
            <label>Email</label>
        
        <input className='contactforminput' ref={emailRef} type="email" name="email"  required={true}/>
        {/* <label>Address</label> */}
        
        {/* <input className='contactforminput' ref={addressRef} type="text" name="address"  required={true}/> */}
            
            <button className='addcontactbtn' type="submit">Save Contact</button>

        </form>
        <button  className='formTogglebtn' onClick={handleToggle}>X</button>

        </div>
        </div>
    }
    </>
        
        )
}

export default FormComponent