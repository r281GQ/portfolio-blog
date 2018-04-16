import styled from 'styled-components';

export default styled.div`
  display: flex;

  flex-direction: row-reverse;
  justify-content: space-between;
  height: 350px;
  background-color: #fafafa;
  margin-bottom: 20px;
  border-width: 2px;
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    background-color: #e0e0e0;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
  }
`;
