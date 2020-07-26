import React, { useEffect } from 'react';

function Admin() {
  useEffect(() => {
    document.title = 'MUHAMMET GOK | Admin';
  }, []);
  return (
    <div id='admin'>
      <div className='container'>
        <div className='admin'>
          <p className='admin-title'>Admin</p>
          <button class='btn'>Upload Image to the Gallery</button>
          <button class='btn'>List and Delete Image from the Gallery</button>

          <button class='btn'>Create Showreel</button>
          <button class='btn'>List and Delete Showreels</button>
          <button class='btn'>Create a Blog</button>
          <button class='btn'>List and Delete a Blog</button>
          <button class='btn'>List and Delete Contact Messages</button>
          <button class='btn btn-error'>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
