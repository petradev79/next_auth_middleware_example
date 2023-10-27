import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='flex-column'>
      <h1>Home Page</h1>
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
export default Home;
