import styled from 'styled-components';
import Link from '../../Shared/Link';

export default styled(Link)`
  color: ${({ active }) => (active ? `#D1C4E9` : `#B388FF`)};
`;
