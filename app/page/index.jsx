import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../component/header';
import Issues from '../component/Issues';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { }
    };
  }

  callback(isOpen) {
    if (isOpen) {
      this.setState({
        style: {
          filter: 'blur(5px)'
        }
      });
    } else {
      this.setState({
        style: { }
      });
    }
  }

  render() {
    return (
      <div>
        <div style={this.state.style}>
          <Header />
          <Issues />
        </div>
      </div>
    )
  }
}
