import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import ChakraContainer from '@/components/ChakraContainer';
import ChakraHeading from '@/components/ChakraHeading';
import ChakraCardBasic from '@/components/ChakraCardBasic';
import SemiCircleProgressBar from '@/components/SemiCircleProgressBar';

const Home = async () => {
  const session = await getServerSession(authOptions);
  const rules = session?.user._doc.rules;

  const formatRules = rules?.map((rule, i) =>
    i === rules.length - 1 ? rule : `${rule}, `
  );

  return (
    <ChakraContainer>
      <ChakraHeading
        heading='Home Page'
        text='User with any role have access to view this page'
      />

      {session && (
        <div>
          <ChakraCardBasic
            heading={session?.user._doc.username}
            text={session?.user._doc.email}
            role={session?.user._doc.role}
            rules={formatRules && formatRules}
          />
          <div style={{ border: "1px solid black"}}>
      <SemiCircleProgressBar value={70} />
    </div>
        </div>
      )}
    </ChakraContainer>
  );
};
export default Home;
