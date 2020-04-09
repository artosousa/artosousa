import React, {useState} from 'react';
import {Flex, Heading, Image, Link} from '@chakra-ui/core';
const logo = require('../assets/salmonLogo.png');
const dance = require('../assets/cellPhoneDance.png');
const logos = {logo, dance};

const Footer = () => {
  const [selected, setSelected] = useState(logos.logo);

  return (
    <>
      <Flex
        align="center"
        justify="center"
        direction="column"
        h={['50vh', '50vh', '100vh']}
        bgPos="center"
        bgRepeat="no-repeat"
        marginTop={['-150px', '-150px', '0px']}
        color="#f87d50"
        my="auto"
      >
        <Image
          src={selected}
          alt="logo"
          onClick={() => setSelected(logos.dance)}
          h="15vh"
          marginTop="25vh"
        />
        <Heading
          as="h1"
          textAlign="center"
          fontSize={['2rem', '1.5em', '8vh']}
          marginY="4rem"
        >
          You should call me on my cell phone ... <br />
          Actually just an&nbsp;
          <Link
            borderBottom="5px dashed"
            href="mailto:artosousa@gmail.com"
            _hover={{textDecor: 'none', borderBottom: '5px solid'}}
          >
            email
          </Link>
          &nbsp;will do.
        </Heading>
      </Flex>
    </>
  );
};

export default Footer;
