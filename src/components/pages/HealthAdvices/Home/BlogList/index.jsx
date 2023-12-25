import React from 'react';
import BlogItem from './BlogItem';
import Blog from '../../Blog'

import './styles.css';


const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;