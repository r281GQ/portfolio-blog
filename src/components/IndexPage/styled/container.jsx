import styled from 'styled-components';
import FlexContainer from './flexContainer';

export default styled.div`
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 960px) {
    ${FlexContainer} {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 960px) {
  }
`;
