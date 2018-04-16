import styled from 'styled-components';

export default styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 400px;
  flex-grow: 1;
  overflow: hidden;

  @media (max-width: 992px) {
    font-size: 0.89rem;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
