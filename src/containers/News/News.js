import React, { Component } from 'react';
import axios from 'axios';
import NewsCard from '../../components/NewsCard/NewsCard';
import classes from './News.css';

class News extends Component {
  state = {
    dummyData: [
      {
        title: "Oxfam 'had culture of tolerating poor behaviour', sex scandal report finds",
        imgSrc: "https://e3.365dm.com/18/02/1600x900/skynews-haiti-earthquake-2010_4236057.jpg"
      },
      {
        title: "Mother who drowned her young twins will not face murder trial",
        imgSrc: "https://e3.365dm.com/19/06/1600x900/skynews-samantha-ford-killed-children_4692290.jpg"
      }
    ]
  }
  // componentDidMount(){
  //     axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
  //     .then(response => {          
  //       console.log(response.data);
  //     })
  //     .catch(error => (console.log(error)));

  // }

  sliceNewsType() {
    const { match } = this.props;
    let newsType = null;
    if (match.path && match.path.length === 1) {
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
        <div className={classes.TopCard}>        
          <NewsCard 
            alt="somerandomimage" 
            imageSrc={this.state.dummyData[0].imgSrc} 
            cardType="horizontal"         
          >
            {this.state.dummyData[0].title}
          </NewsCard>          
        </div>     
        <div className={classes.BottomCards}>
          <NewsCard 
            alt="somerandomimage" 
            imageSrc={this.state.dummyData[1].imgSrc}
          >
            {this.state.dummyData[1].title}
          </NewsCard>
          <NewsCard 
            alt="somerandomimage" 
            imageSrc={this.state.dummyData[1].imgSrc}
          >
            {this.state.dummyData[1].title}
          </NewsCard>
          <NewsCard 
            alt="somerandomimage" 
            imageSrc={this.state.dummyData[1].imgSrc}
          >
            {this.state.dummyData[1].title}
          </NewsCard>
          <NewsCard 
            alt="somerandomimage" 
            imageSrc={this.state.dummyData[1].imgSrc}
          >
            {this.state.dummyData[1].title}
          </NewsCard>
          <NewsCard 
            alt="somerandomimage" 
            imageSrc={this.state.dummyData[1].imgSrc}
          >
            {this.state.dummyData[1].title}
          </NewsCard>
          <NewsCard 
            alt="somerandomimage" 
            imageSrc={this.state.dummyData[1].imgSrc}
          >
            {this.state.dummyData[1].title}
          </NewsCard>
        </div>  
      </div>
    );
  }
}

export default News;