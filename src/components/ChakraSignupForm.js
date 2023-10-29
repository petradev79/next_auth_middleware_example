'use client';

import { useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  FormLabel,
  Select,
  FormControl,
  InputRightElement,
  Checkbox,
} from '@chakra-ui/react';
import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import ChakraButton from './ChakraButton';

const rules = [
  { value: 'basic', isChecked: false },
  { value: 'advanced', isChecked: false },
  { value: 'expert', isChecked: false },
  { value: 'master', isChecked: false },
];

const ChakraSignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [checkedRules, setCheckedRules] = useState(rules);

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleChange = e => {
    setCheckedRules(prevEl =>
      prevEl.map(el => {
        return el.value === e.target.value
          ? { ...el, isChecked: !el.isChecked }
          : el;
      })
    );
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const selectedRules = [];
    checkedRules.map(el => el.isChecked && selectedRules.push(el.value));
    console.log(selectedRules);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          role,
          rules: selectedRules,
        }),
      });
      res.status === 201 && console.log('Account has been created');
    } catch (err) {
      setError(err);
      console.log(err);
    }

    setUsername('');
    setEmail('');
    setPassword('');
    setRole('');
    useEffect;
    setCheckedRules(rules);
  };

  return (
    <Flex maxW='40rem' flexDirection='column' justifyContent='center'>
      <Stack flexDir='column' mb='2' justifyContent='center'>
        <Heading as='h2' size='md'>
          Create and add new user account
        </Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p='1rem'
              backgroundColor='whiteAlpha.900'
              boxShadow='md'
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <EmailIcon color='gray.300' />
                  </InputLeftElement>
                  <Input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <EmailIcon color='gray.300' />
                  </InputLeftElement>
                  <Input
                    type='email'
                    placeholder='Email address'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents='none' color='gray.300'>
                    {showPassword ? (
                      <ViewIcon color='gray.300' />
                    ) : (
                      <ViewOffIcon color='gray.300' />
                    )}
                  </InputLeftElement>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <Select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  color={role === '' ? 'gray.500' : 'black'}
                  required
                >
                  <option value='' hidden disabled>
                    Select rule
                  </option>
                  <option value='admin'>Admin</option>
                  <option color='black' value='manager'>
                    Manager
                  </option>
                  <option color='black' value='user'>
                    User
                  </option>
                </Select>
              </FormControl>
              <FormControl
                as={'fieldset'}
                p={'4'}
                border='1px'
                borderColor='gray.200'
                rounded={'md'}
              >
                <FormLabel as='legend' color={'gray.500'}>
                  Select rules for this user
                </FormLabel>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  {checkedRules.map(rule => {
                    return (
                      <Checkbox
                        name='rules'
                        color={'gray.700'}
                        key={rule.value}
                        id={rule.value}
                        value={rule.value}
                        isChecked={rule.isChecked}
                        onChange={e => handleChange(e)}
                      >
                        {rule.value}
                      </Checkbox>
                    );
                  })}
                </Stack>
              </FormControl>
              <ChakraButton
                type='submit'
                text='Register User'
                colorScheme='facebook'
                size='md'
                rounded='md'
              />
            </Stack>
            {error && error}
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ChakraSignupForm;
