import React, { Component } from 'react';
import { string, number, shape } from 'prop-types';

import Container from './styled/container';
import TitleImage from './styled/titleImage';
import Title from './styled/title';
import DetailsWrapper from './styled/detailsWrapper';
import MetaWrapper from './styled/metaWrapper';

import Tag from '../Shared/Tag';
import Date from '../Shared/Date';

import Content from './content';

export default class BlogPost extends Component {
  static propTypes = {
    data: shape({
      markdownRemark: shape({
        frontmatter: shape({
          title: string,
          cover: string,
          date: number,
          type: string
        }),
        html: string
      })
    })
  };

  render() {
    const { markdownRemark: post } = this.props.data;
    const { frontmatter: { title, cover, date, type }, html } = post;

    return (
      <Container>
        <TitleImage src={cover} />
        <MetaWrapper>
          <Title>{title}</Title>
          <DetailsWrapper>
            <Tag type={type} />
            <Date date={date} />
          </DetailsWrapper>
        </MetaWrapper>
        <Content content={html} />
      </Container>
    );
  }
}

export const journalQuery = graphql`
  query JournalQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        cover
        date
        type
      }
    }
  }
`;
