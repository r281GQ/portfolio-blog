import styled from 'styled-components';
import Link from 'gatsby-link';

export const StyledLink = styled(Link)`
  color: ${({ active }) => (active ? `#D1C4E9` : `#B388FF`)};
  text-decoration: none;
`;

export const StyledRightLinkWrapper = styled.div`
  flex-basis: 100px;
  padding: 25px;
`;

export const StyledRightLinkFlex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StyledRightLinkContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
`;

export const LeftLinkWrapper = styled.h1`
  margin: 0;
`;
