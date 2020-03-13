import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Container, Menu } from './styles';

export default function ContextMenu({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleClick() {
    if (visible) setVisible(false);
  }
  return (
    <Container onClick={handleClick}>
      <button type="button" onClick={handleToggleVisible}>
        <span />
        <span />
        <span />
      </button>
      <Menu visible={visible}>{children}</Menu>
    </Container>
  );
}

ContextMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
