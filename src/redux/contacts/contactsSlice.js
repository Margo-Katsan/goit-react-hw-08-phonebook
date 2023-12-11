import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact, editFavorite, fetchFavorites } from "./operations";

const deleteContactFromList = (contacts, contactId) => {
  const index = contacts.findIndex(contact => contact._id === contactId);
  contacts.splice(index, 1);
}

const editContactFromList = (contacts, updatedContact) => {
  const index = contacts.findIndex(contact => contact._id === updatedContact._id);
  contacts.splice(index, 1, updatedContact);
  
}

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
}

const handleFetchFavoritesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favorites = action.payload;
}

const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
}

const handleDeleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  deleteContactFromList(state.items, action.payload._id)
  deleteContactFromList(state.favorites, action.payload._id)
}

const handleEditContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  editContactFromList(state.items, action.payload)
  editContactFromList(state.favorites, action.payload)
}

const handleEditFavoriteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const isFavoriteExist = state.favorites.filter(favorite => favorite._id === action.payload._id).length !== 0;
      if (isFavoriteExist) {
        state.favorites = state.favorites.filter(favorite => action.payload._id !== favorite._id);
      }
      else {
        state.favorites.push(action.payload);
      }
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
    sortBy: ""
  },
  reducers: {
    setSortBy(state, action){
      state.sortBy = action.payload;
    }
  },
    
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, handleEditContactFulfilled)
      .addCase(editContact.rejected, handleRejected)
      .addCase(fetchFavorites.pending, handlePending)
      .addCase(fetchFavorites.fulfilled, handleFetchFavoritesFulfilled)
      .addCase(fetchFavorites.rejected, handleRejected)
  .addCase(editFavorite.pending, handlePending)
      .addCase(editFavorite.fulfilled, handleEditFavoriteFulfilled)
      .addCase(editFavorite.rejected, handleRejected)
});

export const contactsReducer = contactsSlice.reducer;
export const {setSortBy} = contactsSlice.actions
