import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/post/:id" component={SinglePost} />
        <Route path="/" component={AllPosts} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
