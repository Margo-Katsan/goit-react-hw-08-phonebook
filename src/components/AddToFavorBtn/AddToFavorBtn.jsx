import css from "./AddToFavorBtn.module.css";
import { PiStarBold, PiStarFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { editFavorite } from "redux/contacts/operations";

export const AddToFavorBtn = ({ contactId, isFavorite }) => {
  const dispatch = useDispatch()

  return (
    <button className={`${css.favoriteBtn} ${css.btn}`} onClick={() => dispatch(editFavorite({ contactId: contactId, favorite: !isFavorite }))}>
      {isFavorite ? (
        <PiStarFill size={20} className={css.star} color="var(--priority-text-color)" />
      ): (
        <PiStarBold size={20} className={css.star} color="var(--priority-text-color)" />
      )}
      
    </button>
  )
}