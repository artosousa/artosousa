import React, {useState} from 'react';
import dance from '../assets/cellPhoneDance.png';
import logo from '../assets/salmonLogo.png';
import {Flex, Heading, Image, Link} from '@chakra-ui/core';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';

const Footer = () => {
  const [toggled, setToggled] = useState(false);

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
          src={toggled ? dance : logo}
          alt="logo"
          onClick={() => {
            trackCustomEvent(
              {
                category: 'easter egg',
                action: 'logo click',
                label: 'Go Dancing'
              },
              setToggled(prevToggled => !prevToggled)
            );
          }}
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
