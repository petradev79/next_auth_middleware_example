'use client';

import { Button } from '@chakra-ui/react';

const ChakraButton = ({
  onClick,
  text,
  colorScheme = 'brand',
  leftIcon,
  rightIcon,
  size = 'sm',
  rounded = 'sm',
  px = 3,
  py = 1,
}) => {
  return (
    <Button
      onClick={onClick}
      borderRadius={0}
      colorScheme={colorScheme}
      size={size}
      rounded={rounded}
      px={px}
      py={py}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {text}
    </Button>
  );
};
export default ChakraButton;
