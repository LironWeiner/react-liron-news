import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './TopDrawer.css';

const TopDrawer = (props) => {   
    return (
      <div className={[classes.TopDrawer , props.isTopDrawerOpen ? classes.Open:classes.Close].join(' ')}>
        <NavigationItems toggleTopDrawer={props.toggleTopDrawer} />            
      </div>
    );
};

export default TopDrawer;