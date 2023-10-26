'use client';

import { signOut } from 'next-auth/react';

const Header = () => {
  return (
    <div className='header'>
      <h2>Logo</h2>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};
export default Header;
