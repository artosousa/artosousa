import React from 'react';
import {Box, Image, ListItem, Text} from '@chakra-ui/core';

const Project = props => {
  const {data} = props;
  console.log(data);
  return (
    <>
      <ListItem key={data.id} marginY="150px">
        <Box bg="#f87d50" h="150px" maxW="600px" p="20px" height="295px">
          <Box h="100%" w="40px" float="left">
            <Text
              fontSize="1rem"
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
              fontSize="xl"
              textAlign="right"
              textTransform="uppercase"
              fontWeight="bolder"
              color="#fff"
            >
              {data.role}
            </Text>
          </Box>
        </Box>
        <Box>
          {data.featuredImages.map(image => (
            <Image
              key={image.file.fileName}
              alt={image.file.fileName}
              src={image.file.url}
            />
          ))}
        </Box>
      </ListItem>
    </>
  );
};

export default Project;
