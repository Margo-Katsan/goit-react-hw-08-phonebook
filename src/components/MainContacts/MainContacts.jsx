import { ControlSection } from 'components/ControlSection/ControlSection';
import { ContactsSection } from 'components/ContactsSection/ContactsSection';
import css from "./MainContacts.module.css"
export const MainContacts = () => {
  return (
    <div className={css.mainContainer}>
      <ControlSection />

      <ContactsSection />
    </div>
  )
}