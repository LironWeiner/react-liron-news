import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.css';

export const logoStyles = {
  style1: 'style1',
  style2: 'style2'
};

export const Logo = (props) => {
  let newsDesign = classes[logoStyles.style1];
  if(props.design){
    Object.values(logoStyles).find(style => {      
      if(style === props.design){
        newsDesign = classes[props.design];
        return true;
      }
    });
  } 

  return (
    <div className={classes.Logo}>
      <Link to="/">
        LIRON<span className={newsDesign}>NEWS</span>
      </Link>
    </div>
  );
};

