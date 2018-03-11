import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

export default props => <StyledContainer> {props.children} </StyledContainer>;
