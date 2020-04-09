import PropTypes from 'prop-types';
import React from 'react';
import {Box, Flex, Heading, Image} from '@chakra-ui/core';

const Brands = props => {
  const {data} = props;
  return (
    <>
      <Box
        w="90%"
        mx="auto"
        pos="relative"
        zIndex="2"
        marginTop={['124px', '124px', '0']}
      >
        <Heading
          as="h1"
          textAlign={['center', 'center', 'left']}
          color="#f87d50"
          fontSize={['2.2rem', '2.2rem', '4rem']}
          padding={['16px', '16px', '0px']}
          my={['10px', '10px', '24px']}
          data-sal="slide-up"
          data-sal-easing="ease"
        >
          Some Brands I&apos;ve worked with.
        </Heading>
        <Flex
          zIndex="2"
          alignItems="center"
          justifyContent="center"
          mx="auto"
          w={['90%', '90%', '100%']}
          backgroundColor="white"
          flexDir={['column', 'column', 'row']}
        >
          {data.brands.map(brand => (
            <Flex
              key={brand.id}
              flex="1"
              flexWrap="wrap"
              alignContent="center"
              p="5"
              mx="0.6em"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={brand.brandLogo.file.url}
                title={brand.brandTile}
                alt={brand.brandLogo.file.fileName}
              ></Image>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box
        borderWidth="10px"
        borderColor="#f87d50"
        w="10vw"
        h="8vh"
        float="right"
        zIndex="1"
        right="2%"
        marginTop="-2%"
        position="relative"
      ></Box>
    </>
  );
};

Brands.propTypes = {
  data: PropTypes.object
};

export default Brands;
