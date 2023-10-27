import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='flex-column'>
      <h1>Dashboard Page</h1>
      <p>Only If your role is admin you have access to view this page</p>

      {session && (
        <div>
          <h2>{session?.user._doc.username}</h2>
          <p>Email: {session?.user._doc.role}</p>
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
export default Dashboard;
