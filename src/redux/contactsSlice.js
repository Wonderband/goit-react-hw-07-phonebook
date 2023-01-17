import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations';
import { Notify, Loading } from 'notiflix';

const contactsInitialState = {
    contactsArray : [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
    Loading.standard('Loading...');
};
const handleRejected = (state, action) => { 
    state.isLoading = false;
    Loading.remove();
    state.error = action.payload;
    Notify.failure(state.error);
}
      
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            Loading.remove();
            state.error = null;           
            state.contactsArray = action.payload;
         },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            Loading.remove();
            state.error = null;  
            state.contactsArray.push(action.payload);
            Notify.info('New contact added');            
        },
        [deleteContact.fulfilled](state, action) { 
            state.isLoading = false;
            Loading.remove();
            state.error = null;              
            state.contactsArray = state.contactsArray.filter(contact => contact.id !== action.payload.id); 
             Notify.info('Contact deleted');            
        },
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
    }
});

export const contactsReducer = contactsSlice.reducer;