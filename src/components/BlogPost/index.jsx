import React from 'react';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter: { path, title } } = post;
  return (
    <div>
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
