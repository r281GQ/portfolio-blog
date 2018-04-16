import styled from 'styled-components';
import Link from '../../Shared/Link';

export default styled(Link)`
  color: ${({ active, theme: { primaryColor, secondaryColor } }) =>
    !active ? secondaryColor : primaryColor};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.6rem;
`;
