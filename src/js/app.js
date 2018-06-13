import '../css/app.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import IntroDiv from './components/intro';
/*ReactDOM.render(
  <section class="top-section site-section"></section>,
  document.getElementById('root')
);*/

class App extends Component {
  render() {

    return (
      <div>
        <IntroDiv />
      </div>
    )

  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);