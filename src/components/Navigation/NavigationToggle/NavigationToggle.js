import React from 'react';
import classes from './NavigationToggle.css';

const NavigationToggle = (props) => {
  return (
    <div
      onClick={props.clicked}
      className={[classes.NavigationToggle, props.isTopDrawerOpen ? classes.Open : null].join(' ')}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default NavigationToggle;