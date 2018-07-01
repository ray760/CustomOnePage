import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import YTVideo from './ytVideo'

class BsModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      centered: true,
      modal: false,
      size: 'lg',
      vidId: null
    };

    this.toggle = this.toggle.bind(this);
  }

  onSetVidId(vidId) {
    this.setState({ vidId })
    this.toggle();
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
            <YTVideo video={this.state.vidId} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default BsModal;