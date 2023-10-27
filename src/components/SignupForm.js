'use client';
import { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const [error, setError] = useState(null);

  // const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const role = e.target[3].value;
    console.log(role);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          role
        }),
      });
      res.status === 201 && console.log('Account has been created');
        // router.push('/dashboard/login?success=Account has been created');
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className='signup-form'>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          required
        />
        <input
          type='text'
          placeholder='Email'
          required
        />
        <input
          type='password'
          placeholder='Password'
          required
        />
        <select >
          <option value='admin'>Admin</option>
          <option value='manager'>Manager</option>
          <option value='user'>User</option>
        </select>
        <button>Register</button>
        {error && 'Something went wrong!'}
      </form>
      {/* <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href='/login'>
        Login with an existing account
      </Link> */}
    </div>
  );
};

export default SignupForm;