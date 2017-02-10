import React from 'react';
import { Link } from 'react-router';

import '../style/btnAdd.scss';

class btnAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Link className="btn-add" to="/issue"><i className="fa fa-plus"></i></Link>
      </div>
    );
  }
}

export default btnAdd;
