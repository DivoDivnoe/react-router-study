import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal
    className="modal"
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleResetSelectedOption}
    closeTimeoutMS={200}
    ariaHideApp={false}
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleResetSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
