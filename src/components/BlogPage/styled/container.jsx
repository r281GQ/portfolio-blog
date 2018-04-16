import styled from 'styled-components';

export default styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 992px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
