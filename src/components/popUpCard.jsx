import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const PopUpCard = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <React-Fragment>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            <h3 className="modalTitle">Welcome to React Quiz</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalBody">
          This is a quiz application built using ReactJS. <br />
          <br />
          It will dynamically load the question->answers pair and upload them
          into the components.
        </Modal.Body>

        <Modal.Footer className="modalFooter justify-content-center">
          <Button variant="primary" onClick={handleClose}>
            Start the Quiz
          </Button>
        </Modal.Footer>
      </Modal>
    </React-Fragment>
  );
};

export default PopUpCard;
