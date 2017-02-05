import React from 'react';
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router';

import index from './page/index';
import add from './page/add';

class root extends React.Component{
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>{this.props.children}</div>
      )
    }
};

const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={root}>
            <IndexRoute component={index} />//首页
            <Route path="index" component={index} />
            <Route path="add" component={add} />
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;
