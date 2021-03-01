import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Posts Module
import Listing from './Posts/listing';
import Add from './Posts/add';
import Edit from './Posts/edit';
import View from './Posts/view';

import './style.css';

// Axios Coonfiguration
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Interceptor Request
axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// Interceptor Response
axios.interceptors.response.use(response => {
    console.log(response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

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