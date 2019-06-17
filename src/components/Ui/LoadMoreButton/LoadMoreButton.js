import React from 'react';
import classes from './LoadMoreButton.css';

const LoadMoreButton = (props) => {
  const { match, pageNumber } = props;
  return (
    <div onClick={() => props.click(match, pageNumber)} className={classes.LoadMoreButton}>
      Load More
    </div>
  );
};

export default LoadMoreButton;