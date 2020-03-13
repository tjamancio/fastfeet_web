import React from 'react';

import { MdAdd } from 'react-icons/md';

import colors from '~/styles/colors';

import { Container } from './styles';

export default function ButtonAdd() {
  return (
    <Container>
      <MdAdd size={22} color={colors.white} />
      Cadastrar
    </Container>
  );
}
