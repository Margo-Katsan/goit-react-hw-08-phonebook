import { useSelector } from 'react-redux';
import { NoFoundMessage } from 'components/NoFoundMessage/NoFoundMessage';
import { selectVisibleContactItems, selectError, selectIsLoading, selectFilter } from 'redux/contacts/selectors';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import css from "./ContactsSection.module.css"

export const ContactsSection = () => {
  const contacts = useSelector(selectVisibleContactItems);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <section>

      {isLoading && !error && <Loader />}
      {(contacts.length === 0) ? (
  
        <NoFoundMessage message={filter === '' ? 'You have not added contacts yet.' : `Contact name "${filter}" not found.`} />
      ) : (
          <h1 className={css.title}>My contacts ({contacts.length})</h1>
      )}
      
      <ContactsList />
      </section>
  )
}