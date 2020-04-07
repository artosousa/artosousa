import PropTypes from 'prop-types';
import React from 'react';
import {Box, Flex, Heading, Image} from '@chakra-ui/core';

const Brands = props => {
  const {data} = props;
  return (
    <>
      <Box w="90%" minW="420px" mx="auto" pos="relative" zIndex="2">
        <Heading as="h1" color="#f87d50" my="24px">
          Some Brands I&apos;ve worked with.
        </Heading>
        <Flex
          zIndex="2"
          alignItems="center"
          justifyContent="center"
          w="100%"
          backgroundColor="white"
        >
          {data.brands.map(brand => (
            <Flex
              key={brand.id}
              flex="1"
              flexDir="row"
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
