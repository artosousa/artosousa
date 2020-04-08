import Logo from '../assets/salmonLogo.png';
import React from 'react';
import {Flex, Heading, Image, Link} from '@chakra-ui/core';

const Footer = () => {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        direction="column"
        h="100vh"
        bgPos="center"
        bgRepeat="no-repeat"
        color="#f87d50"
        my="auto"
      >
        <Image src={Logo} h="20%" marginTop="25vh" />
        <Heading as="h1" textAlign="center" fontSize="8vh" marginY="4rem">
          You should call me on my cell phone ... <br />
          Actually just an&nbsp;
          <Link
            borderBottom="5px dashed"
            href="mailto:artosousa@gmail.com"
            _hover={{textDecor: 'none', borderBottom: '5px solid'}}
          >
            email
          </Link>
          &nbsp;will do the job.
        </Heading>
      </Flex>
    </>
  );
};

export default Footer;
