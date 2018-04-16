import styled from 'styled-components';

export default styled.div`
  display: ${props => (props.vertical ? `block` : `inline-block`)};
  margin: 10px;

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    display: inline-block;
  }

  @media (max-width: 480px) {
  }
`;
