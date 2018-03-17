import styled from 'styled-components';

export default styled.div`
  position: absolute;
  ${props => (props.alignment === 'right' ? `right: 0px` : `left: 0px`)};
  top: 0px;
  height: 100%;
`;
