import React, { Component } from 'react';
import { shape, string } from 'prop-types';

import Intro from './styled/intro';
import Container from './styled/container';
import LinkContainer from './styled/linkContainer';
import Title from './styled/title';
import DeploymentLink from './styled/deploymentLink';
import GitHubLink from './styled/gitHubLink';
import Content from './styled/content';
import Cover from './styled/cover';

import Link from '../Shared/Link';

export default class Project extends Component {
  static propTypes = {
    data: shape({
      markdownRemark: shape({
        frontmatter: shape({
          title: string,
          cover: string,
          intro: string,
          githublink: string,
          deploymentlink: string
        }),
        html: string
      })
    })
  };

  render() {
    const {
      data: {
        markdownRemark: {
          frontmatter: { title, cover, intro, githublink, deploymentlink },
          html
        }
      }
    } = this.props;

    // eslint-disable-next-line
    const image = require(`../../../content/pictures/${cover}`);

    return (
      <Container>
        <Cover src={image} />
        <Title>{title}</Title>
        <Intro>{intro}</Intro>
        <LinkContainer>
          <Link to={deploymentlink}>
            <DeploymentLink>{deploymentlink}</DeploymentLink>
          </Link>
          <Link to={githublink}>
            <GitHubLink>{githublink}</GitHubLink>
          </Link>
        </LinkContainer>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    );
  }
}

export const projectQuery = graphql`
  query ProjectQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        cover
        date
        type
        deploymentlink
        githublink
        intro
      }
    }
  }
`;
