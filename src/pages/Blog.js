import React, { useEffect } from 'react';

function Blog() {
  useEffect(() => {
    document.title = 'MUHAMMET GOK | Blog';
  }, []);
  return (
    <div id='blog'>
      <div className='container'>
        <div className='blog'>
          <p className='blog-title'>BLOG</p>
          <div className='blog-content'></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
