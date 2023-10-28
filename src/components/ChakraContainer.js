'use client';

import { Container } from '@chakra-ui/react';

const ChakraContainer = ({
  children,
  maxW = '4xl',
  bg = '',
  centered = false,
}) => {
  return (
    <>
      <Container p={8} maxW={maxW} bg={bg} centerContent={centered}>
        {children}
      </Container>
    </>
  );
};
export default ChakraContainer;
