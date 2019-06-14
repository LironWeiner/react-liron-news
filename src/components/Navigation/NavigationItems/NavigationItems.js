import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { pathList } from '../../../pathList';
import classes from './NavigationItems.css';

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      {
        pathList.map(item => {
          return (
            <NavigationItem
              key={item.type}
              toggleTopDrawer={props.toggleTopDrawer}
              link={item.path}
              exact
            >{item.type}
            </NavigationItem>
          );
        })
      }
    </ul>
  );
};

export default NavigationItems;