import React, { useEffect } from 'react';

import { MdEdit, MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import ButtonAdd from '~/components/ButtonAdd';
import ContextMenu from '~/components/ContextMenu';
import MenuItem from '~/components/ContextMenu/MenuItem';
import Search from '~/components/Search';
import { searchRecipientsRequest } from '~/store/modules/recipient/duck';
import colors from '~/styles/colors';
import { Title, FlexRow, Table } from '~/styles/components';

// import { Container } from './styles';

export default function Recipient() {
  const dispatch = useDispatch();
  const deliverymen = useSelector(state => state.recipient.data);

  useEffect(() => {
    dispatch(searchRecipientsRequest(''));
    return () => { };
  }, [dispatch]);

  function handleSearchChange(event) {
    dispatch(searchRecipientsRequest(event.target.value));
  }

  return (
    <>
      <Title>Gerenciando destinatários</Title>
      <FlexRow>
        <Search
          placeholder="Buscar por destinatários"
          onChange={handleSearchChange}
        />
        <ButtonAdd />
      </FlexRow>

      <Table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map(recipient => (
            <tr key={recipient.id}>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>
                {`${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`}
              </td>
              <td>
                <ContextMenu>
                  <MenuItem>
                    <MdEdit color={colors.red} size={15} />
                    <label>Editar</label>
                  </MenuItem>
                  <MenuItem>
                    <MdDelete color={colors.red} size={15} />
                    <label>Excluir</label>
                  </MenuItem>
                </ContextMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
