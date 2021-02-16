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
        <Link to="/users">Users</Link>
      </div>
      
      <Switch>
        <Route path="/users" exact component={Listing} />
        <Route path="/users/add" component={Add} />
        <Route path="/users/edit" component={Edit} />
        <Route path="/users/view" component={View} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);