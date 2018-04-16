import styled, { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default styled.div`
  background-color: white;
  width: 33%;
  height: 100%;
  text-align: justify;
  border-width: 5px;
  border-radius: 5px;
  border-color: black;
  margin-bottom: 10px;
  padding: 50px;
  margin: 10px;
  margin-bottom: 30px;

  transition: all 200ms ease-in-out;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    background-color: #e0e0e0;
  }

  ${media.desktop`
    margin: 0px;
    width: 66%;
    padding: 20px;
  `} ${media.tablet`
    margin: 0px;
    width: 100%;
    padding: 20px;
  `};
`;
