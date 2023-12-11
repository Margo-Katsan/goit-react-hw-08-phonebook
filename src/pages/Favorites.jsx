import { FavoritesSection } from "components/FavoritesSection/FavoritesSection";
import { useEffect } from 'react';
import { useDispatch,} from 'react-redux';
import { fetchFavorites } from "redux/contacts/operations";

export default function Favorites() {
  const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  return (
    <>
      <FavoritesSection />
    </>
  );
}