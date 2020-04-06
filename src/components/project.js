import PropTypes from 'prop-types';
import React from 'react';
import {Box, Image, ListItem, Stack, Text} from '@chakra-ui/core';

const Project = props => {
  const {data} = props;
  return (
    <>
      <ListItem key={data.id} marginY="150px">
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
        <Box>
          <Stack isInline spacing={8}>
            {data.featuredImages.map(image => (
              <Image
                key={image.file.fileName}
                alt={image.file.fileName}
                src={image.file.url}
              />
            ))}
          </Stack>
        </Box>
      </ListItem>
    </>
  );
};
Project.propTypes = {
  data: PropTypes.array
};

export default Project;
