import Logo from '../assets/salmonLogo.png';
import React from 'react';
import {Flex, Heading, Image, Link} from '@chakra-ui/core';

class Footer extends React.Component {
  render() {
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
          <Image src={Logo} h="20%" />
          <Heading as="h1" textAlign="center" fontSize="8vh" marginY="4rem">
            You should call me on my cell phone ... <br />
            Actually just an &nbsp;
            <Link textDecoration="underline" href="mailto:artosousa@gmail.com">
              email
            </Link>
            &nbsp;is fine
          </Heading>
        </Flex>
      </>
    );
  }
}

export default Footer;
