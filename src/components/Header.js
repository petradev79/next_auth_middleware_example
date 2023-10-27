'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  const { data: session } = useSession();
  const role = session?.user?._doc.role;
  return (
    <div className='header'>
      <h2>Logo</h2>
      <div className='navigation'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        {role && (role === 'admin' || role === 'manager') && (
          <Link href='/contact'>Contact</Link>
        )}
        {role && role === 'admin' && <Link href='/dashboard'>Dashboard</Link>}
        <Link href='/register'>Register</Link>
      </div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};
export default Header;
