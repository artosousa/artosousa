import PropTypes from 'prop-types';
import React from 'react';
import linkImg from '../assets/linkImg.png';
import {Box, Flex, Image, Link, ListItem, Text} from '@chakra-ui/core';

const PersonalProject = props => {
  const {data} = props;
  return (
    <>
      <ListItem
        key={data.id}
        display="flex"
        flexDir="column"
        w="100%"
        marginBottom={['64px', '164px', '164px', '0px']}
      >
        <Box
          bg="#f87d50"
          w={['90%', '100%', '65%']}
          h="150px"
          p="20px"
          height="295px"
          data-sal="slide-up"
          data-sal-easing="ease"
        >
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
              {data.projectTitle}
            </Text>
          </Box>
          <Box w="100%">
            <Text
              fontSize={['1.2rem', '1.2rem', '1.6rem']}
              textAlign="right"
              textTransform="uppercase"
              fontWeight="bolder"
              color="#fff"
            >
              {data.projectType}
            </Text>
          </Box>
        </Box>
        <Box w="80%" mx="auto" marginTop="-227px">
          <Flex>
            <Flex flex="1" flexDir="column" mx="0.5em">
              <Link
                href={data.projectLink}
                isExternal
                title={data.projectTitle}
                zIndex="22"
              >
                <Image
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  zIndex="2"
                  h="auto"
                  w={['100%', '100%', '80%']}
                  marginLeft={['53px', '53px', 'auto']}
                  marginRight="auto"
                  alt={data.projectImage.file.fileName}
                  src={data.projectImage.file.url}
                />
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Text>
            <Link
              href={data.projectLink}
              data-sal="slide-up"
              data-sal-easing="ease"
              pos="relative"
              w={['65%', '65%', '55%', '45%']}
              float="right"
              bg="#6F4541"
              color="#fff"
              zIndex="1"
              p="40px 20px 20px 20px"
              marginTop={['-15px', '-15px', '-30px', '-30px']}
              marginRight={['0px', '0px', '30px']}
              isExternal
              title={data.projectTitle}
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

PersonalProject.propTypes = {
  data: PropTypes.object
};

export default PersonalProject;
