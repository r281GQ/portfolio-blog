import styled from 'styled-components';

export default styled.div`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border-width: 2px;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
