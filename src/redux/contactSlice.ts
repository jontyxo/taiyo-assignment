import { createSlice } from "@reduxjs/toolkit";
interface Contact {
    id:number;
    firstName: string;
    lastName: string;
    phone?:number,
    email?:string,
    address?:string
    
   }
   interface ContactsState {
    contacts: Contact[];
  
  }
  const initialState: ContactsState = {
    contacts: []
  };
export const contactSlice = createSlice({
    name:"contact", //name of the store
    initialState,
    reducers:{
        addContact: (state,action): void=>{
            state.contacts.push({
                id:state.contacts.length,
                firstName:action.payload.fname,
                lastName:action.payload.lname,
                phone:action.payload.phone,
                email:action.payload.email,
                address:action.payload.address
            })
              },
           deleteContact: (state, action):void =>{
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
           },
           editContact:(state, action) =>{
            const { id } = action.payload;
            
            const contactIndex = state.contacts.findIndex((contact) => contact.id === id);
            if (contactIndex !== -1 && state.contacts[contactIndex]) {
              if(action.payload.fname){

                state.contacts[contactIndex].firstName = action.payload.fname;
              }
              if(action.payload.lname){

                state.contacts[contactIndex].lastName = action.payload.lname;
              }
              if(action.payload.phone){

                state.contacts[contactIndex].phone = action.payload.phone;
              }
              if(action.payload.email){

                state.contacts[contactIndex].email = action.payload.email;
              }
              if(action.payload.address){

                state.contacts[contactIndex].address = action.payload.address;
              }

            }
          }
    }
})

export const {addContact,deleteContact,editContact} =contactSlice.actions;
export default contactSlice.reducer;