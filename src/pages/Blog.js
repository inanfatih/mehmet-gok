import React, { useEffect } from 'react';

function Blog() {
  useEffect(() => {
    document.title = 'MUHAMMET GOK | Blog';
  }, []);
  return (
    <div id='blog'>
      <div className='container'>
        <div className='blog'></div>
      </div>
    </div>
  );
}

export default Blog;
