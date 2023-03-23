import styled from 'styled-components';

export const CastBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-bottom: 40px;
  gap: 20px;
  padding: 30px;
`;
export const ActorImg = styled.img`
  max-width: 200px;
  height: 300px;
  margin-bottom: 10px;
`;
