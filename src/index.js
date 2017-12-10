import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import Header from './components/Header';
import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';
import NewPost from './components/NewPost';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:id" component={SinglePost} />
          <Route path="/" component={AllPosts} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));