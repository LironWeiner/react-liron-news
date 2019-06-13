import React, { Component } from 'react';
import { instance, apiKey } from '../../axios-news';
import NewsCard from '../../components/NewsCard/NewsCard';
import Spinner from '../../components/Ui/Spinner/Spinner';
import pathNames from '../../pathNames';
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
      default:
        break;
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

  fillNewsData = () => {
    const { data } = this.state;
    const { match } = this.props;
    let languageDirection = null;
    if (match.path && match.path.length === 1) {
      languageDirection = "rtl";
    }

    if (data) {
      return (
        <React.Fragment>
          <div className={classes.TopCard}>
            <NewsCard
              key={data[0].url}
              alt="top news image"
              imageSrc={data[0].urlToImage}
              url={data[0].url}
              cardType="horizontal"
              direction={languageDirection}
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
                    imageSrc={article.urlToImage}
                    direction={languageDirection}
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