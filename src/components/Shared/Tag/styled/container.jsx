import styled from 'styled-components';

const ENGINEERING = 'engineering';
const SPIRITUALITY = 'spirituality';

const determineBackgroundColor = type => {
  switch (type) {
    case ENGINEERING:
      return `#C2185B`;
    case SPIRITUALITY:
      return `#1A237E`;
    default:
      return `black`;
  }
};

const determineColor = type => {
  switch (type) {
    case ENGINEERING:
      return `#fafafa`;
    case SPIRITUALITY:
      return `#fafafa`;
    default:
      return `#fafafa`;
  }
};

export default styled.span`
  ${props => props.size === 'small' && `font-size: 0.8rem;`} text-align: center;
  background-color: ${props => determineBackgroundColor(props.type)};
  color: ${props => determineColor(props.type)};
  padding: ${props => (props.size === 'small' ? `2px` : `8px`)};
  letter-spacing: 3px;
  border-radius: 4px;
  text-transform: uppercase;
`;
