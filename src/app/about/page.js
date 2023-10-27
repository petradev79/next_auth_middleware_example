'use client';

import { useSession } from 'next-auth/react';

const About = () => {
  const { data: session } = useSession();
  return (
    <div className='flex-column'>
      <h1>About Page is Client side</h1>
      <p>User with any role have access to view this page</p>

      {session && (
        <div>
          <h2>{session?.user._doc.username}</h2>
          <p>Email: {session?.user._doc.email}</p>
          <p>Role: {session?.user._doc.role}</p>
          <p>
            Rules:{' '}
            {session?.user._doc.rules &&
              session?.user._doc.rules.map(rule => {
                return <span key={rule}>{rule} </span>;
              })}
          </p>
        </div>
      )}
    </div>
  );
};
export default About;
