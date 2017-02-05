import React from 'react';

import '../style/issue.scss';

class issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: [{
        id: 1,
        content: 'test content',
        date: '2017-1-2'
      }, {
        id: 2,
        content: '测试网卡是客户的试网卡是客户的试网卡是客户的试网卡是客户的',
        date: '2017-1-2'
      }]
    };
  }

  render () {
    // if (this.state.loading) {
    //   return (
    //     <div className="loading">
    //       <i className="fa fa-refresh fa-spin"></i>
    //     </div>
    //   )
    // }

    return (
      <div>
        {this.state.list.map(item=>{
          return (
            <div className="issue" key={item.id}>
              <div className="content">
                <p className="title">{item.content}</p>
                <p className="date">{item.date}</p>
              </div>
              <div className="action">
                <p>
                  <a className="btn-drop" href="#"><i className="fa fa-times"></i></a>
                  <a className="btn-check" href="#"><i className="fa fa-check"></i></a>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default issues;
