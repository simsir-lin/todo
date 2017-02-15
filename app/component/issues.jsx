import React from 'react';
import { Link } from 'react-router';

import '../style/issues.scss';

import localstorage from '../utils/localstorage.jsx';
import Alert from './alert';

class issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [],
      isShowModal: false
    };
    this.timer = 0;
  }

  componentDidMount () {
    this.setState({
      list: localstorage.get('issues') || [],
      loading: false
    });
  }

  handleTouch(content) {
    this.timer = setTimeout(() => {
      this.setState({
        isShowModal: true,
        content: content
      });
    }, 1000);
  }

  handlehandleTouchEnd() {
    if (this.timer > 0) {
      clearTimeout(this.timer);
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <div className="loading">
          <i className="fa fa-refresh fa-spin"></i>
        </div>
      )
    }

    return (
      <div className="issues">
        {this.state.list.map(item=>{
          return (
            <Link to={'/issue/' + item.id} className="item" key={item.id} onTouchStart={this.handleTouch.bind(this, item.content)} onTouchEnd={this.handlehandleTouchEnd.bind(this)}>
              <div className="content">
                <p className="title">{item.content}</p>
                <p className="date">{item.date}</p>
              </div>
            </Link>
          )
        })}
        <Alert isOpen={this.state.isShowModal} title="事件预览" text={this.state.content} />
      </div>
    )
  }
}

export default issues;
