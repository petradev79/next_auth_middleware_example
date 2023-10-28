'use client';

import { Box, Heading, Text } from '@chakra-ui/react';

const ChakraHeading = ({ heading, text }) => {
  return (
    <Box maxW='40rem' mb={6}>
      <Heading mb={4}>{heading}</Heading>
      <Text fontSize='xl'>{text}</Text>
    </Box>
  );
};

export default ChakraHeading;
