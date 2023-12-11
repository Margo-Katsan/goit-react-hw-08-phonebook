import { Avatar } from "@mui/material";
import css from "./AvatarContact.module.css";

export const AvatarContact = ({ avatarURL, name }) => {
  return (
    <>
      {avatarURL ? (
        <Avatar alt="avatar" src={avatarURL} sx={{ width: 60, height: 60 }}/>
        
      ) : (
          <img src={`https://ui-avatars.com/api/?name=${name}&length=1&background=8C8375&color=E2DED9&font-size=0.6`} alt="avatar" className={css.avatar} />
      )}
    </>   
  )
}