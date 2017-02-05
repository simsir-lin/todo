import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../component/header';
import Issues from '../component/Issues';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Issues />
      </div>
    )
  }
}
