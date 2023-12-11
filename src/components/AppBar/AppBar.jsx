import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
        <Navigation />
        {isLoggedIn ?
          <><UserMenu />
            <BurgerMenu />
          </>
          :
          <AuthNav />}
        
      </div>
    </header>
  );
};