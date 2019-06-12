import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import News from './containers/News/News';
import pathList from './pathList';
import classes from './App.css';

function App() {  
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          {
            pathList.map(thePath => {
              return <Route key={thePath.type} path={thePath.path} exact component={News} />;
            })
          }
        </Switch>        
      </Layout>
    </div>
  );
}

export default App;
