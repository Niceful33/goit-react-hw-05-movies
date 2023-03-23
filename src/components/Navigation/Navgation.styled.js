import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Nav = styled.nav`
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  border-bottom: 2px solid black;
`;

export const NavItem = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  border: 1px solid;
  background-color: white;
  border-radius: 4px;
  padding: 10px 20px;
  &.active {
    background-color: #8f6c98;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #8f6c98;
  }
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px 24px 24px;
  background-color: rgba(36, 21, 29, 0.16);
`;
