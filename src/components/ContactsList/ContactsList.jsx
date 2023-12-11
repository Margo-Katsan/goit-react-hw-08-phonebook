import { useSelector } from "react-redux"
import { selectVisibleContactItems } from "redux/contacts/selectors"
import { selectSortBy } from 'redux/contacts/selectors';
import { ContactListItem } from "components/ContactListItem/ContactListItem"
import css from "./ContactsList.module.css"

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContactItems);
  const sortBy = useSelector(selectSortBy)
  let previousItemToCompare = "";

  const isRepeat = (item) => {
    if (item === previousItemToCompare) {
      previousItemToCompare = item;
      return false;
    }
    else {
      previousItemToCompare = item;
      return true
    }
  }

  return (
    <ul className={css.contacts}>
      {
        contacts.map(contact =>
          <>
            {sortBy === "name" && isRepeat(contact.name[0]) &&
              < p > {contact.name[0]}</p>
            }
            {sortBy === "last" &&
              < p > {new Date(contact.updatedAt).toLocaleString('en-US')}</p>
            }
            {sortBy === "birthday"&& contact.birthday && isRepeat(new Date(contact.birthday).toLocaleString('en-US', { month: 'long' }))  &&
              < p className={css.birthday}>
                {new Date(contact.birthday).toLocaleString('en-US', { month: 'long' })}
                {(new Date(contact.nextBirthday).getFullYear() === new Date().getFullYear() || new Date(contact.nextBirthday).getFullYear() === new Date().getFullYear() + 1) && (
                  <p>{ new Date(contact.nextBirthday).getFullYear()}</p>
                )}
              </p>
            }
            {sortBy === "birthday"&& !contact.birthday && isRepeat(new Date(contact.nextBirthday).getFullYear())  && 
              <p>
                Not given birthday
              </p>
            }
            <ContactListItem contact={contact} />
          </>
          
        )
      }
    </ul>
  )
}