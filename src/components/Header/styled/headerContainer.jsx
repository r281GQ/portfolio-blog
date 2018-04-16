import styled from 'styled-components';

export default styled.header`
  background-color: ${({ theme: { primaryBackgroundColor } }) =>
    primaryBackgroundColor};
  margin-bottom: 1.45rem;
`;
