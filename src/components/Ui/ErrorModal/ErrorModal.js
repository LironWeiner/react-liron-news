import React from 'react';
import errorIcon from '../../../assets/images/error.svg';
import getErrorType from '../../../errorTypes';
import classes from './ErrorModal.css';

const ErrorModal = (props) => {
  return (
    <div className={[classes.ErrorModal, props.isError ? classes.Open : null].join(' ')}>
      <div className={classes.Content}>
        <div className={classes.Header}>
          <img src={errorIcon} />
          <h1>Error</h1>
        </div>
        <div className={classes.Body}>
          <p>{props.children ? getErrorType(props.children.message):null}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;