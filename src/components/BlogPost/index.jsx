import React from 'react';

import Container from './styled/container';
import Title from './styled/title';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter: { path, title } } = post;
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: 20,
        borderWidth: 3,
        borderRadius: 5
      }}
    >
      {path}
      {title}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
