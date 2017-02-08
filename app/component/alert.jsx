import React from 'react';

import '../style/alert.scss';

import localstorage from '../utils/localstorage.jsx';

class alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      show: nextProp.isOpen
    });
  }

  close() {
    this.setState({
      show: false
    });
  }

  render () {
    if (!this.state.show) {
      return (<div></div>)
    }

    return (
      <div className="alert">
        <div className="window">
          <div className="content">
            <div className="title">
              {this.props.title}
              <i className="fa fa-times" onClick={this.close.bind(this)}></i>
            </div>
            <div className="text">
              {this.props.text}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

alert.propTypes = {
  isOpen: React.PropTypes.bool,
  text: React.PropTypes.string,
  title: React.PropTypes.string
};

export default alert;
