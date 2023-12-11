import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';

import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { fetchContacts } from 'redux/contacts/operations';
import { setSortBy } from 'redux/contacts/contactsSlice';
import { selectSortBy } from 'redux/contacts/selectors';
import css from "./SortBy.module.css";
import { useEffect } from 'react';

export const SortBy = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);
  const options = [
  {value: "", label: "Default", className: css.option },
    { value: "name", label: "Name", className: css.option },
    { value: "last", label: "Last updated", className: css.option },
    {value: "birthday", label: "Birthday", className: css.option}
  ]
  useEffect(() => {
    dispatch(fetchContacts(sortBy));
  }, [dispatch, sortBy]);
  return (
    <div className={css.container}>
      <Dropdown
        options={options}
        placeholder={"Sort by"}

        className={css.wrapper}
        controlClassName={css.control}
        placeholderClassName={css.placeholder}
        menuClassName={css.menu}
        
        onChange={option => dispatch(setSortBy(option.value))}
        
        arrowClosed={
          <span className="arrow-open">
            <HiChevronDown size={18} color={"var(--secondary-text-color)"} />
          </span>
        }
        arrowOpen={
          <span className="arrow-open">
            <HiChevronUp size={18} color={"var(--secondary-text-color)"}/>
          </span>
        }
      
      />

    </div>
  )
}