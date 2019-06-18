import React from 'react';
import classes from './LoadMoreButton.css';

const LoadMoreButton = (props) => {  
  return (    
    <div onClick={props.click} className={classes.LoadMoreButton}>    
      Load More
    </div>
  );
};

export default LoadMoreButton;