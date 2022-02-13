import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import React from "react";

const ModalProfileSuccess = (props) => (
<Modal isOpen={props.open} toggle={props.toggle} className="text-center">
  <div className="modal-header">
    <h3 className="modal-title mx-auto" id="exampleModalLiveLabel">
      Success!
    </h3>
    <button
    aria-label="Close"
    className="close"
    type="button"
    onClick={props.toggle}
    >
      <span aria-hidden={true}>×</span>
    </button>
  </div>
  <ModalBody>
    <p className="mx-auto">
      Woohoo, you've successfully created your profile!
    </p>
  </ModalBody>
  <ModalFooter>
    <Button
    className="mx-auto"
    color="success"
    type="button"
    onClick={props.onClick}
    >
      Ok
    </Button>
  </ModalFooter>
</Modal>
);

export default ModalProfileSuccess;
