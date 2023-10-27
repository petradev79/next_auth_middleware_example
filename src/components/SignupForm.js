'use client';

import { useState } from 'react';

const SignupForm = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const role = e.target[3].value;
    const rules = [];
    document
      .getElementsByName('rules')
      .forEach(el => el.checked && rules.push(el.value));
    console.log(rules);

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
          role,
          rules,
        }),
      });
      res.status === 201 && console.log('Account has been created');
    } catch (err) {
      setError(err);
      console.log(err);
    }

    e.target.reset();
    return false;
  };

  return (
    <div className='signup-form'>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' required />
        <input type='text' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <select>
          <option value='admin'>Admin</option>
          <option value='manager'>Manager</option>
          <option value='user'>User</option>
        </select>
        <fieldset id=''>
          <legend>Select rules for this user?</legend>
          <div>
            <input type='checkbox' id='basic' name='rules' value='basic' />
            <label htmlFor='basic'>Basic</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='advanced'
              name='rules'
              value='advanced'
            />
            <label htmlFor='advanced'>Advanced</label>
          </div>
          <div>
            <input type='checkbox' id='expert' name='rules' value='expert' />
            <label htmlFor='expert'>Expert</label>
          </div>
          <div>
            <input type='checkbox' id='master' name='rules' value='master' />
            <label htmlFor='master'>Master</label>
          </div>
        </fieldset>
        <button>Register</button>
        {error && 'Something went wrong!'}
      </form>
    </div>
  );
};

export default SignupForm;
