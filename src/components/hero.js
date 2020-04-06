import React from 'react';
import headerBG from '../assets/heroBG.jpg';
import rehypeReact from 'rehype-react';
import {Flex, Heading, Image} from '@chakra-ui/core';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p(props) {
      return (
        <Heading
          as="h3"
          w="55%"
          mx="auto"
          fontWeight="300"
          {...props}
          textAlign="center"
        />
      );
    }
  }
}).Compiler;

const Hero = props => {
  const {data} = props;
  console.log(data);
  return (
    <>
      <Flex
        align="center"
        justify="center"
        direction="column"
        h="100vh"
        bgImage={`url(${headerBG})`}
        bgPos="center"
        bgRepeat="no-repeat"
        color="white"
      >
        <Image h="50%" maxH="320px" src={data.logo.file.url} />
        <Heading as="h1" textAlign="center" fontSize="5xl" marginY="2rem">
          {data.mainTag}
        </Heading>
        {renderAst(data.subHeading.childMarkdownRemark.htmlAst)}
      </Flex>
    </>
  );
};

export default Hero;
