import { useSelector } from "react-redux";
import { selectFavorites } from "redux/contacts/selectors";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { NoFoundMessage } from "components/NoFoundMessage/NoFoundMessage";
import css from "./FavoritesSection.module.css";

export const FavoritesSection = () => {
  const favorites = useSelector(selectFavorites)
  
  return (
    <section className={css.section}>
      {favorites.length === 0 && (
        <NoFoundMessage message="You haven't added a contact to your favorites yet" />
      )}
      <ul className={css.list}>
        {favorites.map(favorite => <ContactListItem contact={favorite} />)}
      </ul>
    </section>
  )
}