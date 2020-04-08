import PropTypes from 'prop-types';
import React from 'react';
import linkImg from '../assets/linkImg.png';
import {Box, Flex, Image, Link, ListItem, Text} from '@chakra-ui/core';

const Project = props => {
  const {data} = props;

  return (
    <>
      <ListItem
        key={data.id}
        marginTop={['50px', '50px', '250px']}
        h={['50vh', '50vh', '100vh']}
      >
        <Box
          bg="#f87d50"
          h="150px"
          w={['100%', '100%', '600px']}
          p="20px"
          height="295px"
          data-sal="slide-up"
          data-sal-easing="ease"
        >
          <Box h="100%" w="40px" float="left">
            <Text
              fontSize={['1.1 rem', '1.1rem', '1.3rem']}
              color="#000"
              transform="rotate(-90deg)"
              textTransform="uppercase"
              transformOrigin="right bottom 0"
              float="left"
              textAlign="center"
              left="-190px"
              position="relative"
              height="17px"
              width="217px"
            >
              {data.title}
            </Text>
          </Box>
          <Box w="100%">
            <Text
              fontSize={['1.2rem', '1.4rem', '1.6rem']}
              textAlign="right"
              textTransform="uppercase"
              fontWeight="bolder"
              color="#fff"
            >
              {data.role}
            </Text>
          </Box>
        </Box>
        <Box
          w={['95%', '95%', '80%']}
          mx="auto"
          marginTop={['-240px', '-235px', '-227px']}
        >
          <Flex>
            {data.featuredImages.map(image => (
              <Flex
                flex="1"
                flexDir="column"
                h={['200px', '200px', 'auto']}
                mx={['0.3em', '0.3em', '0.5em']}
                key={image.file.fileName}
              >
                <Image
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  zIndex="2"
                  h="auto"
                  w={['100%', '100%', '90%']}
                  mx="auto"
                  //borderRadius="30px"
                  alt={image.file.fileName}
                  src={image.file.url}
                />
              </Flex>
            ))}
          </Flex>
        </Box>
        <Box>
          <Text>
            <Link
              data-sal="slide-up"
              data-sal-easing="ease"
              pos="relative"
              w={['50%', '50%', '25%']}
              float="right"
              bg="#f87d50"
              color="#fff"
              zIndex="1"
              p="40px 20px 20px 20px"
              marginTop={['-15px', '-15px', '-30px']}
              href={data.link}
              isExternal
              title={data.title}
            >
              View Project
              <Image
                src={linkImg}
                float="right"
                pos="relative"
                marginRight="8px"
                marginTop="-15px"
                w="32px"
              />
            </Link>
          </Text>
        </Box>
      </ListItem>
    </>
  );
};

Project.propTypes = {
  data: PropTypes.object
};

export default Project;
