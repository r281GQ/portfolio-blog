import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 10px;
  margin-bottom: 30px;
  width: 33%;

  @media (max-width: 992px) {
    margin: 0px;
    width: 66%;
  }

  @media (max-width: 768px) {
    margin: 0px;
    width: 100%;
  }
`;
