import React from 'react';

import '../style/header.scss';

export default class header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shadow header">
        <p><i className="fa fa-bars"></i>&nbsp;&nbsp;&nbsp;待办事务</p>
      </div>
    )
  }
}
