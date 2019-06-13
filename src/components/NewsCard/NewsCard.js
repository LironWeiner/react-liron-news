import React from 'react';
import classes from './NewsCard.css';

const NewsCard = (props) => {
    return (
      <div className={props.cardType === "horizontal" ? classes.NewsCard : classes.NewsCardVertical}>
        <div className={classes.InnerDiv}>
          <img alt={props.imageAlt} src={props.imageSrc} />
          <div style={{direction: props.direction ? props.direction:"ltr"}} className={classes.Text}>{props.children}</div>
        </div>
      </div>
    );
};

export default NewsCard;