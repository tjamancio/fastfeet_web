import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import logo from '~/assets/fastfeet-logo.png';
import { signOut } from '~/store/modules/auth/duck';

import { Container, Content, MenuItem, Menu } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.profile.name);
  const { pathname } = window.location;

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" title="Fastfeet" />
          <Menu>
            <MenuItem to="/orders" activeroute={pathname === '/orders'}>
              ENCOMENDAS
            </MenuItem>
            <MenuItem
              to="/deliverymen"
              activeroute={pathname === '/deliverymen'}
            >
              ENTREGADORES
            </MenuItem>
            <MenuItem to="/recipients" activeroute={pathname === '/recipients'}>
              DESTINATÁRIOS
            </MenuItem>
          </Menu>
        </nav>

        <aside>
          <strong>{name}</strong>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
