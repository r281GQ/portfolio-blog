import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: block;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 200ms ease-in-out;
`;
