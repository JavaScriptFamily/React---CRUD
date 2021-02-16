import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// User Module
import Listing from './Users/listing';
import Add from './Users/add';
import Edit from './Users/edit';
import View from './Users/view';

import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="menu">
        <Link to="/"> Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
      
      <Switch>
        <Route path="/posts" exact component={Listing} />
        <Route path="/posts/add" component={Add} />
        <Route path="/posts/edit/:id" component={Edit} />
        <Route path="/posts/view/:id" component={View} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);