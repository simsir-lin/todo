import React from 'react';
import ReactDOM from 'react-dom';

import LocalStorageService from '../utils/localstorage';
import CommonService from '../utils/common';
import Header from '../component/header';
import '../style/issue.scss';

export default class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {},
      isUpdate: false
    };
  }

  componentWillMount() {
    if (this.props.params.id) {
      let issues = LocalStorageService.get('issues');
      for (let i = 0; i < issues.length; i++) {
        if (issues[i].id == this.props.params.id) {
          this.setState({
            issue: issues[i],
            isUpdate: true
          });
        }
      }
    }
  }

  handleChange(e) {
    this.setState({
      issue: {
        content: e.target.value
      }
    });
  }

  handleClick() {
    let caCheKey = 'issues';
    let issues = LocalStorageService.get(caCheKey);
    if (this.state.isUpdate) {
      for (let i = 0; i < issues.length; i++) {
        if (issues[i].id == this.props.params.id) {
          issues[i].content = this.state.issue.content;
          issues[i].date = CommonService.getNowDate();
        }
      }
    } else {
      issues.push({
        id: CommonService.getRandomNumber(),
        content: this.state.issue.content,
        date: CommonService.getNowDate()
      });
    }

    LocalStorageService.set(caCheKey, issues);
    alert('保存成功');
  }

  remove() {
    let caCheKey = 'issues';
    let issues = LocalStorageService.get(caCheKey);
    let index = 0;
    for (let i = 0; i < issues.length; i++) {
      if (issues[i].id == this.props.params.id) {
        index = i;
      }
    }
    issues.splice(index, 1);
    LocalStorageService.set(caCheKey, issues);
    this.props.router.goBack();
  }

  back() {
    this.props.router.goBack();
  }

  render() {
    return (
      <div>
        <Header title={this.state.isUpdate ? '编辑' : '添加'} icon="fa-arrow-left" onClick={this.back.bind(this)} />
        <div className="issue">
          <textarea defaultValue={this.state.issue.content} onChange={this.handleChange.bind(this)} ></textarea>
          <button onClick={this.handleClick.bind(this)}><i className="fa fa-check"></i></button>
          <button className={this.state.isUpdate ? '' : 'hidden'} onClick={this.remove.bind(this)}><i className="fa fa-trash"></i></button>
        </div>
      </div>
    )
  }
}
