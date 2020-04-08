import PropTypes from 'prop-types';
import React from 'react';
import headerBG from '../assets/heroBG.jpg';
//import headerVHS from '../assets/headerVHS.webm';
import rehypeReact from 'rehype-react';
import {Flex, Heading, Image} from '@chakra-ui/core';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p(props) {
      return (
        <Heading
          as="h3"
          w={['80%', '80%', '65%']}
          mx="auto"
          fontWeight="300"
          fontSize={['2.5vh', '2.5vh', '4vh']}
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
      <Flex
        align="center"
        justify="center"
        direction="column"
        h="100vh"
        bgImage={`url(${headerBG})`}
        backgroundSize="cover"
        color="white"
      >
        <Image
          h={['25%', '30%', '50%']}
          maxH="320px"
          src={data.logo.file.url}
        />
        <Heading
          as="h1"
          textAlign="center"
          fontSize={['4vh', '4vh', '8vh']}
          marginY="2rem"
        >
          {data.mainTag}
        </Heading>
        {renderAst(data.subHeading.childMarkdownRemark.htmlAst)}
      </Flex>
    </>
  );
};

Hero.propTypes = {
  data: PropTypes.object
};
export default Hero;
