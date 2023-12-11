import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://contacts-api-zrna.onrender.com/api/';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(`contacts`, {
        params: params
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      let response;
      let responseAvatar;

      if (newContact.birthday) {
        response = await axios.post("contacts", { name: newContact.name, phone: newContact.phone, birthday: newContact.birthday });
      }
      else {
        response = await axios.post("contacts", { name: newContact.name, phone: newContact.phone });
      }

      
      
      if (newContact.avatarURL) {
        const data = new FormData();
        data.append("avatar", newContact.avatarURL);


        responseAvatar = await axios.patch(`contacts/${response.data._id}/avatar`, data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        });
        return { ...response.data, avatarURL: responseAvatar.data.avatarURL };
        
      }
      return response.data;
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${contactId}`);
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (updatedContact, thunkAPI) => {
    try {
      if (updatedContact.avatar) {
        const data = new FormData();
        data.append("avatar", updatedContact.avatar);
        console.log("data", data);
        await axios.patch(`contacts/${updatedContact._id}/avatar`, data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        });
      }
      const response = await axios.put(`contacts/${updatedContact._id}`, {name: updatedContact.name, phone: updatedContact.phone, birthday: updatedContact.birthday});
       return response.data;
      
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(e.message);
      
    }
  }
)

export const fetchFavorites = createAsyncThunk(
  "contacts/fetchFavorites",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`contacts`, {
        params: {
          favorite: true
        }
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editFavorite = createAsyncThunk(
  "contacts/editFavorite",
  async (contactToUpdateFavorite, thunkAPI) => {
    const { contactId, favorite} = contactToUpdateFavorite;
    try {
      const response = await axios.patch(`contacts/${contactId}/favorite`, {favorite});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
