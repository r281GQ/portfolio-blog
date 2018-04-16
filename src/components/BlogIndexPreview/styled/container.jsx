import styled from 'styled-components';

export default styled.div`
  margin-bottom: 30px;
  width: 33%;
  margin: 10px;

  @media (max-width: 960px) {
    margin: 0px;
    width: 66%;
  }
  @media (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`;
