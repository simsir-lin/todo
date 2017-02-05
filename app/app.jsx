import React from 'react';
import ReactDOM from 'react-dom';

require('font-awesome-webpack');
import './style/app.scss';

import route from './router';

// class App extends React.Component{
//     constructor(props) {
//       super(props);
//     }
//
//     render() {
//       return (
//         <Add />
//       );
//     }
// };

document.documentElement.style.fontSize = parseInt(window.innerWidth/4.14) + 'px';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(route, app);
