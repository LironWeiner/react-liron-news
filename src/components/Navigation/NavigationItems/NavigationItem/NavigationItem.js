import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
  let isActive = null;
  return (
    <li className={classes.NavigationItem}>      
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}                        
      >
        <div onClick={props.toggleTopDrawer} className={classes.Text}>{props.children}</div>
      </NavLink>
    </li>
  );
};

export default NavigationItem;