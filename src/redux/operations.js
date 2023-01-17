import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63c51dc2f3a73b34784e179c.mockapi.io';

export const fetchContacts = createAsyncThunk( 'contacts/fetchAll', async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {      
      const getContacts = await axios.get('/contacts');     
      if (
        getContacts.data.some(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
        )
      ) {
        alert(`${newContact.name} is already in contacts`);       
        throw new Error('double contact!');
      } else {
        const response = await axios.post('/contacts', newContact);        
        return response.data;
      }
    } catch (err) {      
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);     
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
