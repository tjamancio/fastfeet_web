import React, { useEffect } from 'react';

import { MdEdit, MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import ButtonAdd from '~/components/ButtonAdd';
import ContextMenu from '~/components/ContextMenu';
import MenuItem from '~/components/ContextMenu/MenuItem';
import Search from '~/components/Search';
import { searchDeliverymenRequest } from '~/store/modules/deliveryman/duck';
import colors from '~/styles/colors';
import { Title, FlexRow, Table } from '~/styles/components';

// import { Container } from './styles';

export default function Deliveryman() {
  const dispatch = useDispatch();
  const deliverymen = useSelector(state => state.deliveryman.data);

  useEffect(() => {
    dispatch(searchDeliverymenRequest(''));
    return () => { };
  }, [dispatch]);

  function handleSearchChange(event) {
    dispatch(searchDeliverymenRequest(event.target.value));
  }

  return (
    <>
      <Title>Gerenciando encomendas</Title>
      <FlexRow>
        <Search
          placeholder="Buscar por encomendas"
          onChange={handleSearchChange}
        />
        <ButtonAdd />
      </FlexRow>

      <Table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map(deliveryman => (
            <tr key={deliveryman.id}>
              <td>#{deliveryman.id}</td>
              <td />
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <ContextMenu>
                  <MenuItem>
                    <MdEdit color={colors.blue} size={15} />
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
