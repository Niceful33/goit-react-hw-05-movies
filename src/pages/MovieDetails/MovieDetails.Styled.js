import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonBack = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 20px 0;
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 600;

  cursor: pointer;
  :hover {
    background-color: rgba(230, 212, 233, 0.8);
  }
`;
export const Details = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  border: 2px solid;
  border-radius: 10px;
  margin: 0 30px;
  background: linear-gradient(
    rgba(225, 206, 229, 0.23),
    rgba(225, 206, 229, 0.95)
  );
`;

export const InfoFilm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;
`;

export const MoreInfoFilm = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const MoreLink = styled(NavLink)`
  display: block;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid;
  background-color: white;
  border-radius: 4px;
  padding: 10px 20px;
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: rgba(230, 212, 233, 0.8);
  }
`;
