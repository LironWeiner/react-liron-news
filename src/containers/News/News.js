import React, { Component } from 'react';
import { connect } from 'react-redux';

import { maxApiPages } from '../../axios-news';
import NewsCardList from '../../components/NewsCardList/NewsCardList';
import Spinner from '../../components/Ui/Spinner/Spinner';
import { pathNames, loadMoreNewsPaths, rtlNewsPaths } from '../../pathList';
import LoadMoreButton from '../../components/Ui/LoadMoreButton/LoadMoreButton';
import ErrorModal from '../../components/Ui/ErrorModal/ErrorModal';
import * as actions from '../../store/actions/actions';
import classes from './News.css';

class News extends Component {

  componentDidMount() {
    this.props.onResetState();
    this.props.onInitNews(this.props.match);
  }

  fillNewsData = () => {
    const { data } = this.props;
    const { match } = this.props;
    let theLanguageStyle = {};

    if (match.path && rtlNewsPaths.includes(match.path)) {
      theLanguageStyle = { direction: "rtl", fontFamily: "Secular One, sans-serif" };
    }

    if (data) {
      return (
        <NewsCardList
          data={data}
          theLanguageStyle={theLanguageStyle}
        />
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
      newsType = match.path.charAt(1).toUpperCase() + match.path.slice(2);
    }
    return newsType;
  }

  render() {
    const { match } = this.props;

    let loadMoreButton = null;

    if (loadMoreNewsPaths.includes(match.path)) {
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