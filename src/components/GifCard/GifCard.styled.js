import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledCard = styled.article`
  margin: 1.5rem 2rem;
`;

export const StyledModal = styled(Modal)`
  height: 90vh;
  width: 90vw;
  /* background-color: purple; */
  position: absolute;
  top: 2rem;

  div {
    color: blue;
    font-size: 3rem;
  }

  button {
    border: none;
    outline: none;
    padding: 1rem 2rem;
  }
`;
