import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 900px;
  height: 350px;
  background-color: white;
  margin-bottom: 20px;
  border-width: 2px;
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    transform: translateX(-20px);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;
