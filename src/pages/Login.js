import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    document.title = 'MUHAMMET GOK | Login';
  }, []);
  return (
    <div id='login'>
      <div className='container'>
        <div className='login'>
          <p className='login-title'>Login</p>
          <form>
            <div class='text-fields'>
              <input
                type='email'
                name='email'
                class='text-input'
                placeholder='Email Address'
              />
              <input
                type='password'
                name='password'
                class='text-input'
                placeholder='Password'
              />
            </div>
            <button class='btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
