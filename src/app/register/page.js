import SignupForm from '@/components/SignupForm';
import ChakraContainer from '@/components/ChakraContainer';
import ChakraHeading from '@/components/ChakraHeading';
import ChakraNavLink from '@/components/ChakraNavLink';

const Register = () => {
  return (
    <>
      <ChakraContainer>
        <ChakraHeading
          heading='Register Page'
          text='Only If your role is admin you have access to view this page and add new
          users'
        />
      </ChakraContainer>
      <SignupForm />
    </>
  );
};

export default Register;
