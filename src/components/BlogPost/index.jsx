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
import Social from '../Social';

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

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      available: true
    };
  }

  toggleSideBar = () => {
    if (window.scrollY > window.innerHeight) {
      this.setState({ visible: true });
    }

    if (window.scrollY < window.innerHeight) {
      this.setState({ visible: false });
    }
  };

  componentDidMount() {
    this.setState({
      available:
        document.body.scrollHeight < window.outerHeight + 500 ? false : true
    });

    window.addEventListener('scroll', this.toggleSideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleSideBar);
  }

  render() {
    const { markdownRemark: post } = this.props.data;
    const { frontmatter: { title, cover, date, type }, html } = post;

    // eslint-disable-next-line
    const image = require(`../../../content/pictures/${cover}`);

    return (
      <Container>
        <TitleImage src={image} />
        <MetaWrapper>
          <Title>{title}</Title>
          <DetailsWrapper>
            <Tag type={type} />
            <Date date={date} />
          </DetailsWrapper>
        </MetaWrapper>
        <Content content={html} />
        {this.state.available ? (
          <Social vertical visible={this.state.visible} />
        ) : (
          <Social vertical={false} visible={true} />
        )}
      </Container>
    );
  }
}

export const journalQuery = graphql`
  query JournalQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        description
        title
        cover
        date
        type
      }
    }
  }
`;
