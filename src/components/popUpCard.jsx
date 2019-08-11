import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

//the show is a state property, that is directly connected to <Modal> component's visibilty.
//See after sfc implementation for Class Component implementation
const PopUpCard = props => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    props.buttonText === "Restart" ? window.location.reload() : setShow(false);
  };

  //   const startModal =
  //     "This is a quiz application built using ReactJS. <br /><br /> It will dynamically load the question->answers pair and upload them into the components.";

  return (
    <React-Fragment>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-info">
          <Modal.Title className="text-center">
            <h3 className="modalTitle">{props.titleText}</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          className="modalBody"
          dangerouslySetInnerHTML={{ __html: props.bodyText }}
        />

        <Modal.Footer className="modalFooter justify-content-center">
          <Button
            variant="info"
            onClick={handleClose}
            size="lg"
            className="startButton"
          >
            <b>{props.buttonText}</b>
          </Button>
        </Modal.Footer>
      </Modal>
    </React-Fragment>
  );
};

export default PopUpCard;

//-------------------------------- CLASS COMPONENT IMPLEMENTATION ------------------------------------------
// import React, { Component } from 'react';
// import { Modal, Button } from "react-bootstrap";

// class PopUpCard extends Component {
//     state = { show:true}

//     handleClose=()=>{
//         this.setState({show:false})
//     }

//     render() {
//         return (
//             <React-Fragment>
//               <Modal size="lg" show={this.state.show} onHide={this.handleClose} centered>
//                 <Modal.Header closeButton>
//                   <Modal.Title className="text-center">
//                     <h3 className="modalTitle">Welcome to React Quiz</h3>
//                   </Modal.Title>
//                 </Modal.Header>

//                 <Modal.Body className="modalBody">
//                   This is a quiz application built using ReactJS. <br />
//                   <br />
//                   It will dynamically load the question->answers pair and upload them
//                   into the components.
//                 </Modal.Body>

//                 <Modal.Footer className="modalFooter justify-content-center">
//                   <Button variant="primary" onClick={this.handleClose}>
//                     Start the Quiz
//                   </Button>
//                 </Modal.Footer>
//               </Modal>
//             </React-Fragment>
//           );
//     }
// }

// export default PopUpCard;
