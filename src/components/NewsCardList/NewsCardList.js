import React from 'react';
import newsCardPicture from '../../assets/images/newsCardPicture.jpg';
import NewsCard from '../NewsCard/NewsCard';
import classes from './NewsCardList.css';

const NewsCardList = (props) => {
    return (
      <React.Fragment>
        <div className={classes.TopCard}>
          <NewsCard
            key={props.data[0].url}
            alt="top news image"
            imageSrc={props.data[0].urlToImage ? props.data[0].urlToImage : newsCardPicture}
            url={props.data[0].url}
            cardType="horizontal"
            theStyle={props.theLanguageStyle}
          >
            {props.data[0].title}
          </NewsCard>
        </div>
        <div className={classes.BottomCards}>
          {
            props.data.slice(1).map(article => {
              return (
                <NewsCard
                  key={article.url}
                  alt="center news image"
                  imageSrc={article.urlToImage ? article.urlToImage : newsCardPicture}
                  url={article.url}
                  theStyle={props.theLanguageStyle}
                >
                  {article.title}
                </NewsCard>
              );
            })
          }
        </div>
      </React.Fragment>
    );
};

export default NewsCardList;