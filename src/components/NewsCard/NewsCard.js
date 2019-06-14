import React from 'react';
import classes from './NewsCard.css';

const TEXT_LENGTH = 80;

const NewsCard = (props) => {
  console.log(props.children);
  let cardTitle = null;
  if (props.children && props.children.length > TEXT_LENGTH) {
    const howMuchToCut = Math.abs(props.children.length - TEXT_LENGTH);
    cardTitle = props.children.slice(0, -howMuchToCut) + "...";
  }


  return (
    <div className={props.cardType === "horizontal" ? classes.NewsCard : classes.NewsCardVertical}>
      <div className={classes.InnerDiv}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          onClick={() => { window.open(props.url); }}
        />
        <a         
          style={props.theStyle}
          className={classes.Text}
          href={props.url}
        >
          {cardTitle ? cardTitle : props.children}
        </a>
      </div>
    </div>
  );
};

export default NewsCard;