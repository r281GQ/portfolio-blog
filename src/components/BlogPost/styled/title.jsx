import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  text-align: center;
`;

export default props => <StyledTitle> {props.title} </StyledTitle>;
