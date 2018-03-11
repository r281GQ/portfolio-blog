import React from 'react';

import Container from './styled/container';
import Title from './styled/title';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter: { path, title } } = post;
  return (
    <Container>
      <Title title={title} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  );
};

export const postQuery = graphql`
  query BlogQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default BlogPost;
