import React from 'react';
import classes from './Footer.css';

const Footer = () => {
    return (
      <footer className={classes.Footer}>           
        <div>
          <div>
            Powered by <a className={classes.PoweredBy} href="https://newsapi.org">News API</a>
          </div>
        </div>       
      </footer>
    );
};

export default Footer;