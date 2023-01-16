import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
    contactsArray : [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null,
};
      
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            // console.log(action.payload);
            state.contactsArray = action.payload;
        //     console.log(state.contactsArray);
         },
        [addContact.fulfilled](state, action) {
            state.contactsArray.push(action.payload);
            // console.log(state.contactsArray);
        },
        [deleteContact.fulfilled](state, action) { 
            // console.log(action.payload.id);
            state.contactsArray = state.contactsArray.filter(contact => contact.id !== action.payload.id);   
            // console.log(state.contactsArray);
        },
    }
});

export const contactsReducer = contactsSlice.reducer;
// export const { deleteContact } = contactsSlice.actions;