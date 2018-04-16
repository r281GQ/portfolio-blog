import styled from 'styled-components';

export default styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 30px;

  @media (max-width: 992px) {
    width: 700px;
    margin: 0 auto;
    padding: 20px;
  }

  @media (max-width: 768px) {
    width: 480px;
    margin: 0 auto;
    padding: 10px;
  }
  @media (max-width: 480px) {
    width: 400px;
    margin: 0 auto;
    padding: 10px;
  }
`;
