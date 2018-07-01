import '../css/app.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import YTVideo from './components/ytVideo'
import AdsModal from './components/modal'
import IntroDiv from './components/intro';
import AboutDiv from './components/about-me';
import Auth0Div from './components/about-auth0';

class App extends Component {

  constructor(props) {
    super(props)
  }

  accessModal(vidId) {
    this.refs.child.onSetVidId(vidId);
  }

  render() {

    return (
      <div>
        {/* 'ref' allows parent to reference child functions */}
        <AdsModal ref="child" />
        <IntroDiv />
        <AboutDiv onVideoSelect={ 
          vidId => {
            this.accessModal(vidId)
          }
        } />
        <Auth0Div />
      </div>
    )

  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);