import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Nav, NavItem, Container } from './Navgation.styled';

export default function Navigation() {
  return (
    <Container>
      <Header>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </Nav>
        <Suspense fallback={<p>...Loading</p>}>
          <Outlet />
        </Suspense>
      </Header>
    </Container>
  );
}
