import styled from 'styled-components';

export default styled.div`
  display: block;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-width: 2px;
  width: 100%;
  height: 300px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;
