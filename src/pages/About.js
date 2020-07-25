import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = 'MUHAMMET GOK | About Me';
  }, []);
  return (
    <div id='about'>
      <div className='container'>
        <div className='about'>
          <div className='about-image' />
          <div>
            <div>
              <p>ABOUT</p>
              <br />
              <p>
                Muhammet Gok is a Turkish director. He was born in
                Kahramanmaras, Turkey, and he has been living in Germany. He is
                married, and he has a daughter called Sara. Muhammet speaks
                Turkish, Russian, and English.
                <br />
                Muhammet Gok directed many tv series and commercial in Turkey,
                Germany, Tunisia, and Algeria. He started to prepare a new tv
                series in Tunisia.
              </p>
            </div>
            <p>MG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
