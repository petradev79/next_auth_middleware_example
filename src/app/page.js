import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home = async () => {
  const session = await getServerSession(authOptions);
  console.log('session from home: ', session.user);

  return (
    <div>
      <h1>Home Page</h1>
      {session && <h2>{session?.user._doc.role}</h2>}
    </div>
  );
};
export default Home;
