import React, { Component } from 'react';
import { string, number } from 'prop-types';

import PreviewImage from './styled/previewImage';
import Title from './styled/title';
import Container from './styled/container';
import DetailsWrapper from './styled/detailsWrapper';
import ContentWrapper from './styled/contentWrapper';
import PreviewImageWrapper from './styled/previewImageWrapper';

import Link from './../Shared/Link';
import PreviewContent from './content';
import Date from '../Shared/Date';
import Tag from '../Shared/Tag';

export default class BlogPreview extends Component {
  static propTypes = {
    path: string,
    title: string,
    html: string,
    type: string,
    cover: string,
    date: number
  };

  render() {
    const { path, title, html, type, cover, date } = this.props;

    return (
      <Container>
        <PreviewImageWrapper>
          <Link to={path}>
            <PreviewImage src={cover} />
          </Link>
        </PreviewImageWrapper>
        <ContentWrapper>
          <Link to={path}>
            <Title>{title}</Title>
          </Link>
          <DetailsWrapper>
            <Tag type={type} />
            <Date date={date} />
          </DetailsWrapper>
          <PreviewContent content={html} />
        </ContentWrapper>
      </Container>
    );
  }
}
