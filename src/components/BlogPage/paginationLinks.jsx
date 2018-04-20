import React from 'react';
import { string, number, bool } from 'prop-types';

import Link from '../../components/Shared/Link';

const generateBaseURL = tag => (tag ? `/journal/${tag}/` : `/journal/`);

const PaginationLinks = ({ tag, currentPage, hasNext }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: 20,
      marginTop: 20
    }}
  >
    {currentPage !== 1 && (
      <Link to={`${generateBaseURL(tag)}${currentPage - 1}`}>Previous</Link>
    )}
    {hasNext && (
      <Link to={`${generateBaseURL(tag)}${currentPage + 1}`}>Next</Link>
    )}
  </div>
);

PaginationLinks.propTypes = {
  tag: string,
  currentPage: number,
  hasNext: bool
};

PaginationLinks.defaultProps = {
  tag: undefined,
  currentPage: 1,
  hasNext: false
};

export default PaginationLinks;
