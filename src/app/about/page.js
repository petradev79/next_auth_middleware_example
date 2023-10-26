'use client';

import { useSession } from 'next-auth/react';

const About = () => {
  const { data: session } = useSession();
  console.log('session from about: ', session);
  return (
    <div>
      <h1>About Page Client</h1>
      <p>{session?.user?._doc.username}</p>
      <p>{session?.user?._doc.email}</p>
      <p>{session?.user?._doc.role}</p>
    </div>
  );
};
export default About;
