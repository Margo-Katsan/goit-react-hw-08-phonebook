import { PiBookOpenLight } from "react-icons/pi";
import css from "./NoFoundMessage.module.css"

export const NoFoundMessage = ({message}) => {
  return (
    <div className={css.wrapper}>
      <PiBookOpenLight size={60} color="var(--priority-text-color)"/>
      <p>{message}</p>
    </div>
  )
}