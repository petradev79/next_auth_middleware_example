'use client';

import { Spinner, Center } from '@chakra-ui/react';

const ChakraSpinner = () => {
  return (
    <Center h='300px'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='gray.500'
        size='xl'
      />
    </Center>
  );
};
export default ChakraSpinner;
