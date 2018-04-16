import styled from 'styled-components';

export default styled.div`
  display: block;
  height: 1000px;
  max-width: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 992px) {
    height: 750px;
  }

  @media (max-width: 768px) {
    height: 600px;
  }
  @media (max-width: 480px) {
    height: 350px;
  }
`;
