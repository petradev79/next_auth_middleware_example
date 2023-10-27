import Link from 'next/link';

const Denied = () => {
  return (
    <section className='flex-column'>
      <h1>Access Denied</h1>
      <p>
        You are logged in, but you do not have the required access level to view
        this page.
      </p>
      <Link href='/'>Return to Home Page</Link>
    </section>
  );
};
export default Denied;
