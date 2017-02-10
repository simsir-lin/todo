import React from 'react';

import '../style/header.scss';

export default class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {}
    };
  }

  componentWillMount() {
    if (this.props.onClick) {
      this.setState({
        style: {
          cursor: 'pointer'
        }
      });
    }
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div className="shadow header">
        <p><i style={this.state.style} className={'fa ' + this.props.icon} onClick={this.handleClick.bind(this)}></i>&nbsp;&nbsp;{this.props.title}</p>
      </div>
    )
  }
}
