import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectFavorites = state => state.contacts.favorites;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
export const selectSortBy = state => state.contacts.sortBy

export const selectVisibleContactItems = createSelector([selectContacts, selectFilter], (contacts, filter) => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())));
