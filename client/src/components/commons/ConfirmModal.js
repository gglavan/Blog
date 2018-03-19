import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

class ConfirmModal extends Component {
  state = { open: false };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <Button onClick={this.show("tiny")} color="red" size="tiny">
          <Icon name="trash" />Delete
        </Button>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Delete This Post</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this post?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              No
            </Button>
            <Button
              onClick={() => {
                this.close();
                this.props.handleDelete();
              }}
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

ConfirmModal.propTypes = {
  handleDelete: PropTypes.func.isRequired
};

export default ConfirmModal;
