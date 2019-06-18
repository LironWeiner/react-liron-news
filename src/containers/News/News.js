import React, { Component } from 'react';
import { connect } from 'react-redux';

import { maxApiPages } from '../../axios-news';
import NewsCard from '../../components/NewsCard/NewsCard';
import Spinner from '../../components/Ui/Spinner/Spinner';
import { pathNames } from '../../pathList';
import newsCardPicture from '../../assets/images/newsCardPicture.jpg';
import LoadMoreButton from '../../components/Ui/LoadMoreButton/LoadMoreButton';
import ErrorModal from '../../components/Ui/ErrorModal/ErrorModal';
import * as actions from '../../store/actions/actions';
import classes from './News.css';

class News extends Component {

  componentDidMount() {    
    this.props.onResetState();
    //console.log('page number: ',this.props.pageNumber);
    this.props.onInitNews(this.props.match);
  }

  fillNewsData = () => {
    const { data } = this.props;
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

  render() {    
    const { match } = this.props;

    let loadMoreButton = null;
    if (match.path !== pathNames.Home && match.path !== pathNames.Sports && match.path !== pathNames.Business) {     
      loadMoreButton = <LoadMoreButton click={() => this.props.onInitNews(match)} match={match} />;
    }

    return (
      <div className={classes.News} onClick={this.props.error ? this.props.onErrorNull : null}>
        <div className={classes.TopNewsType}>{this.sliceNewsType()}</div>
        <ErrorModal isError={this.props.error}>{this.props.error}</ErrorModal>
        {this.props.isLoading && this.props.data ? <Spinner /> : this.fillNewsData()}        
        {this.props.isLoading || this.props.pageNumber > maxApiPages ? null : loadMoreButton}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    pageNumber: state.pageNumber,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onErrorNull: () => dispatch(actions.setErrorNull()),
    onInitNews: (match) => dispatch(actions.initNews(match)),
    onResetState: () => dispatch(actions.resetState())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(News);