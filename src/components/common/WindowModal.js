import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const ModalWindow = ({ showModal, handleCloseModal, children, ...other }) => (
  <ReactModal isOpen={showModal} {...other}>
    <Cross onClick={handleCloseModal}>x</Cross>
    {children}
  </ReactModal>
);

export default ModalWindow;

const Cross = styled.div`
  color: gray;
  font-size: 28px;
  text-align: right;
  cursor: pointer;
`;
