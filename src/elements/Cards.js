import styled from 'styled-components';
import { elevation, transition, grey } from 'utilities';

export const Card = styled.div`
  background: #ffffff;
  min-width: 30rem;
  max-width: 90%;
  color: ${grey};
  position: relative;
  border-radius: 5px;
  ${elevation[3]}
  ${transition({})}
  z-index: 10;
  padding: 4rem 3rem;
  margin-bottom: 2rem;
  &:hover {
    ${elevation[5]}
  }

  h1 {
    margin-bottom: 1rem;
  }
`;
