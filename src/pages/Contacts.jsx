import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div >
      <ContactForm />

      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </div>
  );
}