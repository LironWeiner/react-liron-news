import React, { Component } from 'react';
import { instance, apiKey } from '../../axios-news';
import NewsCard from '../../components/NewsCard/NewsCard';
import Spinner from '../../components/Ui/Spinner/Spinner';
import { pathNames } from '../../pathList';
import newsCardPicture from '../../assets/images/newsCardPicture.jpg';
import classes from './News.css';

class News extends Component {
  state = {
    data: [],
    isLoading: true
  }

  componentDidMount() {
    const { match } = this.props;
    switch (match.path) {
      case pathNames.Home:
        instance.get('/top-headlines?country=il&pageSize=31&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: response.data.articles, isLoading: false });
          })
          .catch(error => {
            console.log(error);
          });
        break;
      case pathNames.Us:
        instance.get('/top-headlines?country=Us&pageSize=31&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: response.data.articles, isLoading: false });
          })
          .catch(error => {
            console.log(error);
          });
        break;
      case pathNames.World:
        instance.get('/top-headlines?q=world&pageSize=31&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: response.data.articles, isLoading: false });
          })
          .catch(error => {
            console.log(error);
          });
        break;
      case pathNames.Sports:
        instance.get('/top-headlines?country=il&category=sports&pageSize=31&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: response.data.articles, isLoading: false });
          })
          .catch(error => {
            console.log(error);
          });
        break;
      case pathNames.Tech:
        instance.get('/top-headlines?country=il&category=technology&pageSize=31&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: response.data.articles, isLoading: false });
          })
          .catch(error => {
            console.log(error);
          });
        break;
      case pathNames.Business:
        instance.get('/top-headlines?country=il&category=business&pageSize=31&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: response.data.articles, isLoading: false });
          })
          .catch(error => {
            console.log(error);
          });
        break;
      case pathNames.Bitcoin:
        {
          const today = new Date();
          let fromDate = today;
          const formatDateToday = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
          fromDate.setMonth(today.getMonth() - 1);
          fromDate = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
          instance.get('/everything?q=bitcoin&from=' + fromDate + '&sortBy=publishedAt&language=en&pageSize=31&apiKey=' + apiKey)
            .then(response => {
              this.setState({ data: response.data.articles, isLoading: false });
            })
            .catch(error => {
              console.log(error);
            });
          break;
        }
      default:
        break;
    }
  }


  fillNewsData = () => {
    const { data } = this.state;
    const { match } = this.props;
    let theLanguageStyle = {};
    if (match.path &&
      (match.path === pathNames.Home
        || match.path === pathNames.Sports
        || match.path === pathNames.Business)) {
      theLanguageStyle = { direction: "rtl", fontFamily: "Secular One, sans-serif" };
    }

    if (data) {
      return (
        <React.Fragment>
          <div className={classes.TopCard}>
            <NewsCard
              key={data[0].url}
              alt="top news image"
              imageSrc={data[0].urlToImage ? data[0].urlToImage : newsCardPicture}
              url={data[0].url}
              cardType="horizontal"
              theStyle={theLanguageStyle}
            >
              {data[0].title}
            </NewsCard>
          </div>
          <div className={classes.BottomCards}>
            {
              data.slice(1).map(article => {
                return (
                  <NewsCard
                    key={article.url}
                    alt="center news image"
                    imageSrc={article.urlToImage ? article.urlToImage : newsCardPicture}
                    url={article.url}
                    theStyle={theLanguageStyle}
                  >
                    {article.title}
                  </NewsCard>
                );
              })
            }
          </div>
        </React.Fragment>
      );
    }
  }

  sliceNewsType() {
    const { match } = this.props;
    let newsType = null;
    if (match.path && match.path.length === 1) {
      // Home is news from israel
      newsType = 'Top Stories';
    }
    else {
      newsType = match.path.slice(1);
      newsType = newsType.charAt(0).toUpperCase() + newsType.slice(1);
    }
    return newsType;
  }

  render() {
    return (
      <div className={classes.News}>
        <div className={classes.TopNewsType}>{this.sliceNewsType()}</div>
        {this.state.isLoading ? <Spinner /> : this.fillNewsData()}
      </div>
    );
  }
}

export default News;