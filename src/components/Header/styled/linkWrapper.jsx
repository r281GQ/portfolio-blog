import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0.45rem 1.0875rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
  }
`;
