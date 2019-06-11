import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const MAX_SCREEN_WIDTH = 600;

class Layout extends Component {
  state = {
    showTopDrawer: false
  }
 
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  topDrawerToggleHandler = () => {
    this.setState(prevState => ({
      showTopDrawer: !prevState.showTopDrawer
    }));
  }

  updateDimensions = () => {
    if (window.innerWidth > MAX_SCREEN_WIDTH && this.state.showTopDrawer) {
      this.setState({ showTopDrawer: false });
    }
  }

  render() {    
    return (
      <React.Fragment>
        <Toolbar isTopDrawerOpen={this.state.showTopDrawer} toggleButtonClick={this.topDrawerToggleHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;