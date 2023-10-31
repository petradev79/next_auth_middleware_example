'use client';

import { signOut, useSession } from 'next-auth/react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ChakraButton from './ChakraButton';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ChakraNavLink from './ChakraNavLink';

const ChakraHeader = () => {
  const { data: session } = useSession();
  const role = session?.user?._doc.role;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'gray.50'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <ChakraNavLink href='/' label='Home' />
              <ChakraNavLink href='/about' label='About' />
              {role && (role === 'admin' || role === 'manager') && (
                <ChakraNavLink href='/contact' label='Contact' />
              )}
              {role && role === 'admin' && (
                <ChakraNavLink href='/dashboard' label='Dashboard' />
              )}
              {role && role === 'admin' && (
                <ChakraNavLink href='/register' label='Register' />
              )}
            </HStack>
          </HStack>
          <Flex gap={4} alignItems={'center'}>
            <ChakraButton
              onClick={() => signOut()}
              text='Sign out'
              colorScheme='facebook'
              // rightIcon={<ChevronDownIcon />}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <ChakraNavLink href='/' label='Home' />
              <ChakraNavLink href='/about' label='About' />
              {role && (role === 'admin' || role === 'manager') && (
                <ChakraNavLink href='/contact' label='Contact' />
              )}
              {role && role === 'admin' && (
                <ChakraNavLink href='/dashboard' label='Dashboard' />
              )}
              {role && role === 'admin' && (
                <ChakraNavLink href='/register' label='Register' />
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default ChakraHeader;
