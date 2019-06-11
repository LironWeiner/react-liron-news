import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = (props) => {
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem toggleTopDrawer={props.toggleTopDrawer} link='/' exact>Home</NavigationItem>
        <NavigationItem toggleTopDrawer={props.toggleTopDrawer} link='/us'>US</NavigationItem>
        <NavigationItem toggleTopDrawer={props.toggleTopDrawer} link='/world'>World</NavigationItem>
        <NavigationItem toggleTopDrawer={props.toggleTopDrawer} link='/politics'>Politics</NavigationItem>
        <NavigationItem toggleTopDrawer={props.toggleTopDrawer} link='/tech'>Tech</NavigationItem>
        <NavigationItem toggleTopDrawer={props.toggleTopDrawer} link='/business'>Business</NavigationItem>
      </ul>
    );
};

export default NavigationItems;