import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HiMenu } from 'react-icons/hi';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';



export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
      <HiMenu size={32} color='#3A2302' />
      
     
    
      
    </header>
  );
};