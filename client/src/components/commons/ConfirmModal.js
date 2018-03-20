import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import { css } from "react-emotion";
import PropTypes from "prop-types";

const buttonChange = css`
  @media (max-width: 578px) {
    display: block;
    width: 100%;
    margin: 10px 15px;
  }
`;

class ConfirmModal extends Component {
  state = { open: false };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;

    return (
      <div className={buttonChange}>
        <Button
          className={buttonChange}
          onClick={this.show("tiny")}
          color="red"
          size="tiny"
        >
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
