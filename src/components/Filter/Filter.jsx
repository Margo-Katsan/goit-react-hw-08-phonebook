import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/contacts/filterSlice";
import { BiSearchAlt2 } from "react-icons/bi";
import { selectFilter } from "redux/contacts/selectors";
import css from "./Filter.module.css"

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <label className={css.filter}>
      
      <div className={css.inputWrapper}>
            <input className={css.input} placeholder="Search a contact by the name..." type="text" value={filter} onChange={event => { dispatch(changeFilter(event.target.value)) }} />
            <BiSearchAlt2 size={18} className={`${css.icon} icon`}/>
          </div>
    </label>
  )
}