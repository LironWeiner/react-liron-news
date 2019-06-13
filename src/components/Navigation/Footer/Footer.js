import React from 'react';
import classes from './Footer.css';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      Powered by <a className={classes.PoweredBy} href="https://newsapi.org">News API</a>
    </footer>
  );
};

export default Footer;