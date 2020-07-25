import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    document.title = 'MUHAMMET GOK | Contact Me';
  }, []);
  return (
    <div id='contact'>
      <div className='container'>
        <div className='contact'></div>
      </div>
    </div>
  );
}

export default Contact;
