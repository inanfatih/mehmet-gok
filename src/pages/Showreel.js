import React, { useEffect } from 'react';

function Showreel() {
  useEffect(() => {
    document.title = 'MUHAMMET GOK | Showreel';
  }, []);
  return (
    <div id='showreel'>
      <div className='container'>
        <div className='showreel'></div>
      </div>
    </div>
  );
}

export default Showreel;
