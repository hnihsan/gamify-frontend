import React, { useState } from "react";
// @ts-ignore
import winner from "~src/assets/media/illstrations/7.png"; // @ts-ignore
import badge from "~src/assets/media/achievements/badge8.png";
import { Button, Modal } from "react-bootstrap";
const winnerBgImage = {
  backgroundImage: "url(" + winner + ")",
};

const ModalFinishedChallengeReact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalFinishedChallengeReact;
