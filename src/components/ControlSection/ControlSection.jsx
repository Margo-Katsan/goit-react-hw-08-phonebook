import { AddNewContactBtn } from 'components/AddNewContactBtn/AddNewContactBtn';
import { Filter } from 'components/Filter/Filter';
import { SortBy } from 'components/SortBy/SortBy';
import css from "./ControlSection.module.css"

export const ControlSection = () => {
  return (

    <section className={css.section}>
      <div className={css.wrapper}>
        <AddNewContactBtn />
        <SortBy />
      </div>
        
        <Filter />
      </section>

  )
}