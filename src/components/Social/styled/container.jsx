import styled from 'styled-components';

export default styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  text-align: center;
  ${props => props.vertical && `position: fixed; top: 300px; left: 50px;`};

  transition: all 200ms ease-in-out;

  @media (max-width: 992px) {
    left: 0px;
  }

  @media (max-width: 768px) {
    position: static;
    top: auto;
    left: auto;
  }
  @media (max-width: 480px) {
  }
`;
