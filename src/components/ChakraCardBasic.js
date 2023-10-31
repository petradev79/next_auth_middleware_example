'use client';

import {
  Card,
  Stack,
  Heading,
  CardBody,
  Text,
  Image,
  Highlight,
} from '@chakra-ui/react';

const ChakraCardBasic = ({ heading, text, role, rules }) => {
  return (
    <Card
      maxW='40rem'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md' pb='2'>
            Name: {heading}
          </Heading>

          <Text>
            <Highlight
              query='Email:'
              styles={{
                mr: '2',
                fontWeight: 'bold',
              }}
            >
              Email:
            </Highlight>
            {text}
          </Text>
          <Text>
            <Highlight
              query='Role: '
              styles={{
                mr: '2',
                fontWeight: 'bold',
              }}
            >
              Role:
            </Highlight>
            {role}
          </Text>
          <Text>
            <Highlight
              query='Rules: '
              styles={{
                mr: '2',
                fontWeight: 'bold',
              }}
            >
              Rules:
            </Highlight>
            {rules}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};
export default ChakraCardBasic;
