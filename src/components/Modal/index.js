import React, { createRef } from 'react';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function Modal({ children, onCloseClick }) {
  const contentRef = createRef();

  function handleModalClick(event) {
    if (!event.target.closest('#modal-content')) {
      onCloseClick();
    }
    // console.log(event);
  }
  return (
    <Container onClick={handleModalClick}>
      <Content id="modal-content" ref={contentRef}>
        {children}
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};
