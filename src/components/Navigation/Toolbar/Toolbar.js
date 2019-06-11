import React from 'react';
import { Logo, logoStyles } from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationToggle from '../NavigationToggle/NavigationToggle';
import TopDrawer from '../TopDrawer/TopDrawer';
import classes from './Toolbar.css';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="rgba(129, 149, 163, 0.5)" points="0,100 -50,0 100,100" />
      </svg>
      <Logo design={logoStyles.style2} />
      <TopDrawer isTopDrawerOpen={props.isTopDrawerOpen} toggleTopDrawer={props.toggleButtonClick} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      <NavigationToggle clicked={props.toggleButtonClick} isTopDrawerOpen={props.isTopDrawerOpen} />
    </header>
  );
};

export default Toolbar;