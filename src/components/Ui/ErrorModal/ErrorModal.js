import React from 'react';
import classes from './ErrorModal.css';

const ErrorModal = (props) => {    
    return (
      <div className={[classes.ErrorModal, props.isError ? classes.Open:null].join(' ')}>
        <div className={classes.Content}>
          <p>{props.children}</p>
        </div>
      </div>
    );
};

export default ErrorModal;