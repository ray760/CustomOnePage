import '../css/app.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import YTVideo from './components/ytVideo'
import IntroDiv from './components/intro';
import AboutDiv from './components/about-me';
import Auth0Div from './components/about-auth0';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      centered: true,
      modal: false,
      size: 'lg'
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    return (
      <div>
        <Modal centered={this.state.centered} size={this.state.size} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <YTVideo />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <IntroDiv />
        <AboutDiv modal={this.toggle} />
        <Auth0Div />
      </div>
    )

  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);