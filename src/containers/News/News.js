import React, { Component } from 'react';
import { instance, apiKey, pageSize, maxApiPages } from '../../axios-news';
import NewsCard from '../../components/NewsCard/NewsCard';
import Spinner from '../../components/Ui/Spinner/Spinner';
import { pathNames } from '../../pathList';
import newsCardPicture from '../../assets/images/newsCardPicture.jpg';
import LoadMoreButton from '../../components/Ui/LoadMoreButton/LoadMoreButton';
import ErrorModal from '../../components/Ui/ErrorModal/ErrorModal';
import classes from './News.css';

class News extends Component {
  state = {
    data: [],
    isLoading: true,
    pageNumber: 1,
    error: null
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    const { match } = this.props;

    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1
    }));

    switch (match.path) {
      case pathNames.Home:
        instance.get('/top-headlines?country=il&pageSize=' + pageSize + '&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: this.copyRequestDataFormatted(response.data.articles), isLoading: false });
          })
          .catch(error => {
            this.errorHandler(error);
          });
        break;
      case pathNames.Us:
        instance.get('/everything?q=politics+united states&from=' + this.getCalculatedFromDate(3) + '&language=en&sortBy=publishedAt&pageSize='
          + pageSize + '&page=' + this.state.pageNumber + '&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: this.copyRequestDataFormatted(response.data.articles), isLoading: false });
          })
          .catch(error => {
            this.errorHandler(error);
          });
        break;
      case pathNames.World:
        instance.get('/everything?q=world&from=' + this.getCalculatedFromDate(3) + '&sortBy=publishedAt&language=en&pageSize='
          + pageSize + '&page=' + this.state.pageNumber + '&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: this.copyRequestDataFormatted(response.data.articles), isLoading: false });
          })
          .catch(error => {
            this.errorHandler(error);
          });
        break;
      case pathNames.Sports:
        instance.get('/top-headlines?country=il&category=sports&pageSize=' + pageSize + '&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: this.copyRequestDataFormatted(response.data.articles), isLoading: false });
          })
          .catch(error => {
            this.errorHandler(error);
          });
        break;
      case pathNames.Tech:
        instance.get('/everything?q=technology+israel&pageSize=' + pageSize + '&page=' + this.state.pageNumber + '&apiKey=' + apiKey)
          .then(response => {
            console.log(response);
            this.setState({ data: this.copyRequestDataFormatted(response.data.articles), isLoading: false });
          })
          .catch(error => {
            this.errorHandler(error);
          });
        break;
      case pathNames.Business:
        instance.get('/top-headlines?country=il&category=business&pageSize=' + pageSize + '&apiKey=' + apiKey)
          .then(response => {
            this.setState({ data: this.copyRequestDataFormatted(response.data.articles), isLoading: false });
          })
          .catch(error => {
            this.errorHandler(error);
          });
        break;
      case pathNames.Bitcoin:
        {
          instance.get('/everything?q=bitcoin&from=' + this.getCalculatedFromDate(0, 1)
            + '&sortBy=publishedAt&language=en&pageSize='
            + pageSize + '&page=' + this.state.pageNumber + '&apiKey=' + apiKey)
            .then(response => {
              this.setState({ data: this.copyRequestDataFormatted(response.data.articles), isLoading: false });
            })
            .catch(error => {
              this.errorHandler(error);
            });
          break;
        }
      default:
        break;
    }
  }

  getCalculatedFromDate(minusDays, minusMonths) {
    const today = new Date();
    let fromDate = today;
    if ((!minusDays && !minusMonths) || (minusDays <= 0 && minusMonths <= 0)) {
      fromDate = null;
    }
    else if (minusDays && minusDays >= 0) {
      fromDate.setDate(today.getDate() - minusDays);
      fromDate = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()}`;
    }
    else if (minusMonths && minusMonths >= 0) {
      fromDate.setMonth(today.getMonth() - minusMonths);
      fromDate = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()}`;
    }

    return fromDate;
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
    if (match.path && match.path === pathNames.Home) {
      // Home is news from israel
      newsType = 'Top Stories';
    }
    else {
      newsType = match.path.slice(1);
      newsType = newsType.charAt(0).toUpperCase() + newsType.slice(1);
    }
    return newsType;
  }

  copyRequestDataFormatted(articles) {
    const { data } = this.state;

    // Format the data from get request to the data i need
    const newArticles = articles.map(article => {
      const res = {
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage
      };

      return res;
    });

    // Remove duplicates from the new data
    for (let i = 0; i < newArticles.length; i++) {
      for (let j = 0; j < newArticles.length; j++) {
        if (i !== j && newArticles[i].url === newArticles[j].url) {
          newArticles.splice(j, 1);
        }
      }
    }

    return [...data, ...newArticles];
  }

  errorHandler = (err) => {
    this.setState({ error: err });
  }

  render() {
    let loadMoreButton = null;
    if (this.props.match.path !== pathNames.Home && this.props.match.path !== pathNames.Sports && this.props.match.path !== pathNames.Business) {
      loadMoreButton = <LoadMoreButton click={this.getNews} />;
    }

    return (
      <div onClick={() => { this.setState({ error: null }); }} className={classes.News}>
        <div className={classes.TopNewsType}>{this.sliceNewsType()}</div>
        <ErrorModal isError={this.state.error}>{this.state.error ? this.state.error.message : null}</ErrorModal>
        {this.state.isLoading ? <Spinner /> : this.fillNewsData()}
        {this.state.isLoading || this.state.pageNumber > maxApiPages ? null : loadMoreButton}
      </div>
    );
  }
}

export default News;