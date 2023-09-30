import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
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
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
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
      console.log(updatedContact)
      const response = await axios.patch(`/contacts/${updatedContact.id}`, {name: updatedContact.name, number: updatedContact.number});
       return response.data;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
