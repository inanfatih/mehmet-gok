import React, { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
function Gallery(props) {
  useEffect(() => {
    document.title =
      window.location.pathname === '/mylife'
        ? 'MUHAMMET GOK | My Life'
        : 'MUHAMMET GOK | Media';
  }, []);
  return (
    <div id='gallery'>
      <div className='container'>
        <div className='gallery'>
          <p className='gallery-page-title'>
            {window.location.pathname === '/mylife' ? 'My Life' : 'Media'}
          </p>
          <div className='gallery-content'>
            <ImageGallery items={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
