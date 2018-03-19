import styled from 'styled-components';

import CardImage from './cardImage';

export default styled.div`
  position: relative;
  height: 300px;
  margin: 10px;
  width: 300px;
  border-width: 5px;
  border-color: black;
  overflow: hidden;

  &:hover ${CardImage} {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    background-color: #e0e0e0;
    opacity: 0;
    transform: translateY(300px);
  }
`;
