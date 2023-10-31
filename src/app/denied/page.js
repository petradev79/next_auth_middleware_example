import ChakraContainer from '@/components/ChakraContainer';
import ChakraHeading from '@/components/ChakraHeading';
import ChakraNavLink from '@/components/ChakraNavLink';

const Denied = () => {
  return (
    <ChakraContainer>
      <ChakraHeading
        heading='Access Denied'
        text='You are logged in, but you do not have the required access level to view
        this page.'
      />
      <ChakraNavLink href='/' label='Return to Home Page' active={true} />
    </ChakraContainer>
  );
};
export default Denied;
