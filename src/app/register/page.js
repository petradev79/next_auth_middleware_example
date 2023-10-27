import SignupForm from '@/components/SignupForm';

const Register = () => {
  return (
    <>
      <p>
        Only If your role is admin you have access to view this page and add new
        users
      </p>
      <SignupForm />
    </>
  );
};

export default Register;
