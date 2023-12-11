import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainContacts } from 'components/MainContacts/MainContacts';
import { fetchContacts } from 'redux/contacts/operations';
import { selectSortBy } from 'redux/contacts/selectors';

import { selectFavorites } from 'redux/contacts/selectors';


export default function Contacts() {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);
  const favorites = useSelector(selectFavorites)


  useEffect(() => {
    dispatch(fetchContacts({sort: sortBy}));
  }, [dispatch, sortBy, favorites]);

  return (
    <>
      <MainContacts />
    </>
  );
}