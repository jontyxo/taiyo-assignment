import React from 'react'
import ContactForm from '../../components/contactForm/ContactForm'
import ContactList from '../../components/contactList/contactList'
import "./contact.css"


const Contact = () => {
  return (
    <div className='contact'>
      <ContactForm />
    <ContactList />
</div>
    
  )
}

export default Contact