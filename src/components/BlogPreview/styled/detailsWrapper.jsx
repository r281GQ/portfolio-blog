import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.8rem;

  @media (max-width: 992px) {
    margin-top: 1.4rem;
  }

  @media (max-width: 768px) {
    margin-top: 1.1rem;
    flex-direction: column;
    align-items: center;
  }
`;
