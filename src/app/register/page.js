import ChakraContainer from '@/components/ChakraContainer';
import ChakraHeading from '@/components/ChakraHeading';
import ChakraSignupForm from '@/components/ChakraSignupForm';

const Register = () => {
  return (
    <>
      <ChakraContainer>
        <ChakraHeading
          heading='Register Page'
          text='Only If your role is admin you have access to view this page and add new
          users'
        />
        <ChakraSignupForm />
      </ChakraContainer>
    </>
  );
};

export default Register;
