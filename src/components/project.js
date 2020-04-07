import PropTypes from 'prop-types';
import React from 'react';
import linkImg from '../assets/linkImg.png';
import {Box, Flex, Image, Link, ListItem, Text} from '@chakra-ui/core';

const Project = props => {
  const {data} = props;

  return (
    <>
      <ListItem key={data.id} marginY="250px">
        <Box bg="#f87d50" h="150px" maxW="600px" p="20px" height="295px">
          <Box h="100%" w="40px" float="left">
            <Text
              fontSize="1.3rem"
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
              fontSize="1.6rem"
              textAlign="right"
              textTransform="uppercase"
              fontWeight="bolder"
              color="#fff"
            >
              {data.role}
            </Text>
          </Box>
        </Box>
        <Box w="80%" mx="auto" marginTop="-227px">
          <Flex spacing={3}>
            {data.featuredImages.map(image => (
              <Flex
                flex="1"
                flexDir="column"
                mx="0.5em"
                key={image.file.fileName}
              >
                <Image
                  zIndex="2"
                  h="auto"
                  w="90%"
                  mx="auto"
                  borderRadius="30px"
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
              pos="relative"
              w="25%"
              float="right"
              bg="#f87d50"
              color="#fff"
              zIndex="1"
              p="40px 20px 20px 20px"
              marginTop="-30px"
              href={data.link}
              isExternal
            >
              Live Project
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
