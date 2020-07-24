import React from 'react';

import '../style/main.css';
import '../App.css';

function Home() {
  return (
    <div id='home'>
      <div className='container'>
        <p className='quote'>
          Dünyayı değiştirecek olan şey filmler değil, o filmleri izleyen
          insanlardır.
          <br />
          <br />
          Krzysztof Kieslowski
        </p>
      </div>
    </div>
  );
}

export default Home;
