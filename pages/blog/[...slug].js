import React from 'react';
import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
};

export default BlogPost;
