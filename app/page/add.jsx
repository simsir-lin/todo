import React from 'react';
import ReactDOM from 'react-dom';

import LocalStorageService from '../utils/localstorage';

export default class Add extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearch() {
    LocalStorageService.set('a', {
      'asd': 12,
      'a': 'b'
    });
    console.log('____');
    console.log(LocalStorageService.get('a'));
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleSearch}>搜索</button>
      </div>
    )
  }
}
