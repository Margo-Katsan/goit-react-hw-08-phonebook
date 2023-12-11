import { useSelector } from 'react-redux';
import { selectVisibleContactItems, selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import css from "./ContactsSection.module.css"

export const ContactsSection = () => {
  const contacts = useSelector(selectVisibleContactItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <section>

      {isLoading && !error && <Loader />}
      <h1 className={css.title}>My contacts ({contacts.length})</h1>
      <ContactsList />
      </section>
  )
}