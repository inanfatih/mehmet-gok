import React, { useEffect } from 'react';

function Blog() {
  useEffect(() => {
    document.title = 'MUHAMMET GOK | Blog';
  }, []);
  return (
    <div id='blog'>
      <div className='container'>
        <div className='blog'>
          <p className='blog-page-title'>BLOG</p>
          <div className='blog-content'>
            <div className='blog-column'>
              <div className='blog-column-item'>
                <div className='blog-image'></div>
                <p className='blog-title'>Lorem</p>
                <p className='blog-text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam beatae autem fugit, ipsa molestias unde rem! Nobis
                  exercitationem ipsum tenetur, eum natus reprehenderit veniam
                  commodi, assumenda animi maiores cumque dolore saepe nisi,
                  debitis temporibus molestiae. Repellendus cum voluptates nisi
                  enim nobis dignissimos, adipisci ad recusandae
                </p>
              </div>
              <div className='blog-column-item'>
                <div className='blog-image'></div>
                <p className='blog-title'>Lorem</p>
                <p className='blog-text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam beatae autem fugit, ipsa molestias unde rem! Nobis
                  exercitationem ipsum tenetur, eum natus reprehenderit veniam
                  commodi, assumenda animi maiores cumque dolore saepe nisi,
                  debitis temporibus molestiae. Repellendus cum voluptates nisi
                  enim nobis dignissimos, adipisci ad recusandae
                </p>
              </div>
              <div className='blog-column-item'>
                <div className='blog-image'></div>
                <p className='blog-title'>Lorem</p>
                <p className='blog-text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam beatae autem fugit, ipsa molestias unde rem! Nobis
                  exercitationem ipsum tenetur, eum natus reprehenderit veniam
                  commodi, assumenda animi maiores cumque dolore saepe nisi,
                  debitis temporibus molestiae. Repellendus cum voluptates nisi
                  enim nobis dignissimos, adipisci ad recusandae
                </p>
              </div>
            </div>
            <div className='blog-column'>
              <div className='blog-column-item'>
                <div className='blog-image'></div>
                <p className='blog-title'>Lorem</p>
                <p className='blog-text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam beatae autem fugit, ipsa molestias unde rem! Nobis
                </p>
              </div>
              <div className='blog-column-item'>
                <div className='blog-image'></div>
                <p className='blog-title'>Lorem</p>
                <p className='blog-text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam beatae autem fugit, ipsa molestias unde rem! Nobis
                  enim nobis dignissimos, adipisci ad recusandae
                </p>
              </div>
              <div className='blog-column-item'>
                <div className='blog-image'></div>
                <p className='blog-title'>Lorem</p>
                <p className='blog-text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam beatae autem fugit, ipsa molestias unde rem! Nobis
                  exercitationem ipsum tenetur, eum natus reprehenderit veniam
                  commodi, assumenda animi maiores cumque dolore saepe nisi,
                  debitis temporibus molestiae. Repellendus cum voluptates nisi
                  enim nobis dignissimos, adipisci ad recusandae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
