'use client';

import { useSession } from 'next-auth/react';
import ChakraContainer from '@/components/ChakraContainer';
import ChakraHeading from '@/components/ChakraHeading';
import ChakraCardBasic from '@/components/ChakraCardBasic';

const About = () => {
  const { data: session } = useSession();

  const rules = session?.user._doc.rules;

  const formatRules = rules?.map((rule, i) =>
    i === rules.length - 1 ? rule : `${rule}, `
  );

  return (
    <ChakraContainer>
      <ChakraHeading
        heading='About Page Client'
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
        </div>
      )}
    </ChakraContainer>
  );
};
export default About;
