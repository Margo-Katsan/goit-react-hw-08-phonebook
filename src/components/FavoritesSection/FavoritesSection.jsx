import { useSelector } from "react-redux";
import { selectFavorites } from "redux/contacts/selectors";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import css from "./FavoritesSection.module.css";
export const FavoritesSection = () => {
  const favorites = useSelector(selectFavorites)
  return (
    <section className={css.section}>
      <ul className={css.list}>
        {favorites.map(favorite => <ContactListItem contact={favorite} />)}
      </ul>
    </section>
  )
}