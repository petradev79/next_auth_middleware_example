'use client';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const ChakraNavLink = ({ href, label, active = false }) => {
  const pathname = usePathname();

  return (
    <Link
      as={NextLink}
      href={href}
      px={3}
      py={1}
      rounded={'sm'}
      bg={`${pathname === href || active ? 'gray.200' : ''}`}
      _hover={{
        bg: 'gray.200',
      }}
    >
      {label}
    </Link>
  );
};
export default ChakraNavLink;
