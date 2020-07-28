import React, { useEffect } from 'react';
import axios from 'axios';

function Contact() {
  useEffect(() => {
    document.title = 'MUHAMMET GOK | Contact Me';
  }, []);
  return (
    <div id='contact'>
      <div className='container'>
        <div className='contact'>
          <p className='contact-title'>DROP ME A LINE</p>
          <div className='contact-content'>
            <div className='contact-info'>
              {/* <p>CONTACT ME</p> */}
              <p>MUHAMMET GOK</p>
              <p>muhammetgok@gmail.com</p>
              <div className='icons'>
                <a
                  href='https://www.facebook.com/muhammet.gok.100'
                  className='icons'>
                  <i className='fab fa-facebook-square fa-2x'></i>
                </a>
                <a href='https://www.instagram.com/muhametgok/'>
                  <i className='fab fa-instagram fa-2x'></i>
                </a>
              </div>
            </div>
            <div className='contact-form'>
              <div>
                <form>
                  <div className='text-fields'>
                    <input
                      type='text'
                      name='name'
                      className='text-input name-input'
                      placeholder='Name'
                    />
                    <input
                      type='text'
                      name='phone'
                      className='text-input phone-input'
                      placeholder='Phone Number'
                    />
                    <input
                      type='email'
                      name='email'
                      className='text-input email-input'
                      placeholder='Email Address'
                    />
                    <input
                      type='text'
                      name='subject'
                      className='text-input subject-input'
                      placeholder='Subject'
                    />
                    <textarea
                      className='text-input message-input'
                      name='message'
                      placeholder='Enter Message'></textarea>
                    {/* <di className='my-2'>
                    <div data-netlify-recaptcha='true'></div>
                  </di> */}
                  </div>
                  <button className='btn' type='submit'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
