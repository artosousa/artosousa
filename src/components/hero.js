import PropTypes from 'prop-types';
import React from 'react';
//import headerBG from '../assets/heroBG.jpg';
import headerVHS from '../assets/headerVHS.webm';
import rehypeReact from 'rehype-react';
import {Box, Flex, Heading, Image} from '@chakra-ui/core';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p(props) {
      return (
        <Heading
          as="h3"
          w="65%"
          mx="auto"
          fontWeight="300"
          fontSize="4vh"
          {...props}
          textAlign="center"
        />
      );
    }
  }
}).Compiler;

const Hero = props => {
  const {data} = props;
  return (
    <>
      <Box position="relative" zIndex="2">
        <Flex
          align="center"
          justify="center"
          direction="column"
          h="100vh"
          bgPos="center"
          bgRepeat="no-repeat"
          color="white"
          zIndex="2"
        >
          <Image h="50%" maxH="320px" src={data.logo.file.url} />
          <Heading as="h1" textAlign="center" fontSize="8vh" marginY="2rem">
            {data.mainTag}
          </Heading>
          {renderAst(data.subHeading.childMarkdownRemark.htmlAst)}
        </Flex>
      </Box>
      <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        overflow="hidden"
        zIndex="1"
      >
        <video
          loop
          muted
          autoPlay
          position="absolute"
          top="0px"
          left="0px"
          width="100%"
        >
          <source src={headerVHS} type="video/webm" />
        </video>
      </Box>
    </>
  );
};

Hero.propTypes = {
  data: PropTypes.object
};
export default Hero;
