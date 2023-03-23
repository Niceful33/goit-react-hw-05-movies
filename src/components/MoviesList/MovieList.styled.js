import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
`;
export const MovieItem = styled.li`
  border: 2px solid;
  padding: 10px;
  max-width: 320px;
  border-radius: 5px;
  background-color: white;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.07);
    box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
  }
`;
export const ItemLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
export const MovieTitle = styled.h3`
  margin-top: 10px;
`;
