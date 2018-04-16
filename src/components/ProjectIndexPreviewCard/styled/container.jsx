import styled from 'styled-components';

export default styled.div`
margin-bottom: 10px;
  display: flex;
  height: 175px;
  width: 100%:

  border-width: 5px;
  border-radius: 5px;
  border-color: black;
  

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  transition: all 200ms ease-in-out;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    background-color: #e0e0e0;
  }
  

  @media (max-width: 768px) {
    max-width: 100%:
    flex-direction: column;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    max-width: 100%:
  }
`;
