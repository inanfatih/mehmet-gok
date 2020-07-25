import React, { useEffect } from 'react';

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
                  <i class='fab fa-facebook-square fa-2x'></i>
                </a>
                <a href='https://www.instagram.com/muhametgok/'>
                  <i class='fab fa-instagram fa-2x'></i>
                </a>
              </div>
            </div>
            <div className='contact-form'>
              <div>
                <form>
                  <div class='text-fields'>
                    <input
                      type='text'
                      name='name'
                      class='text-input name-input'
                      placeholder='Name'
                    />
                    <input
                      type='text'
                      name='phone'
                      class='text-input phone-input'
                      placeholder='Phone Number'
                    />
                    <input
                      type='email'
                      name='email'
                      class='text-input email-input'
                      placeholder='Email Address'
                    />
                    <input
                      type='text'
                      name='subject'
                      class='text-input subject-input'
                      placeholder='Subject'
                    />
                    <textarea
                      class='text-input message-input'
                      name='message'
                      placeholder='Enter Message'></textarea>
                    {/* <di class='my-2'>
                    <div data-netlify-recaptcha='true'></div>
                  </di> */}
                  </div>
                  <button class='btn' type='submit'>
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
