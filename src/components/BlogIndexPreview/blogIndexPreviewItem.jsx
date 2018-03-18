import React, { Component } from 'react';
import { string, number } from 'prop-types';

import BlogIndexPreviewItemContainer from './styled/blogIndexPreviewItemContainer';
import BlogIndexPreviewItemTitle from './styled/blogIndexPreviewItemTitle';
import DetailsWrapper from './styled/detailsWrapper';

import Tag from '../Shared/Tag';
import Date from '../Shared/Date';
import Link from '../Shared/Link';

const getExcerpt = content => {
  const firstParagraph = content.split('\n')[0];
  const tagsRemoved = firstParagraph.slice(3, -4);
  const whitespaceTrimmed = tagsRemoved.trim();
  const lengthTrimmed = whitespaceTrimmed.substring(0, 80);
  if (whitespaceTrimmed === lengthTrimmed) {
    return whitespaceTrimmed;
  } else {
    return lengthTrimmed + '\u2026';
  }
};

export default class BlogIndexPreviewItem extends Component {
  static propTypes = {
    title: string,
    date: number,
    type: string,
    html: string,
    path: string
  };

  render() {
    const { title, date, type, html, path } = this.props;

    return (
      <Link to={path}>
        <BlogIndexPreviewItemContainer>
          <BlogIndexPreviewItemTitle>{title}</BlogIndexPreviewItemTitle>
          <DetailsWrapper>
            <Tag size="small" type={type} />
            <Date date={date} />
          </DetailsWrapper>
          <div
            dangerouslySetInnerHTML={{
              __html: getExcerpt(html)
            }}
          />
        </BlogIndexPreviewItemContainer>
      </Link>
    );
  }
}
