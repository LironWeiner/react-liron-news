import React, { Component } from 'react';
import axios from 'axios';
import classes from './News.css';

class News extends Component {
  // componentDidMount(){
  //     axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
  //     .then(response => {          
  //       console.log(response.data);
  //     })
  //     .catch(error => (console.log(error)));

  // }

  sliceNewsType() {
    const {match} = this.props;
    let newsType = null;
    if (match.path && match.path.length === 1) {
      newsType = 'Top Stories';
    }
    else {
      newsType = match.path.slice(1);
    }
    return newsType;
  }

  render() {
    return (
      <div className={classes.News}>
        {this.sliceNewsType()}
      </div>
    );
  }
}

export default News;