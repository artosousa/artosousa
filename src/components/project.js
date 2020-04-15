import PropTypes from 'prop-types';
import React from 'react';
import linkImg from '../assets/linkImg.png';
import {Box, Flex, Image, Link, ListItem, Text} from '@chakra-ui/core';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';

const Project = props => {
  const {data} = props;

  return (
    <>
      <ListItem
        key={data.id}
        marginTop={['50px', '50px', '250px']}
        marginBottom={['50px', '150px', '0px']}
        paddingBottom={['68px', '0', '0']}
        minHeight={['auto', 'auto', '100vh']}
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
          <Box
            h="100%"
            w="40px"
            float="left"
            position="relative"
            left={['-10px', '-10px', '0px', '0x']}
          >
            <Text
              fontSize={['1.1 rem', '1.1rem', '1.3rem']}
              color="#6F4541"
              fontWeight="500"
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
          <Flex flexDir={['column', 'column', 'row', 'row']}>
            {data.featuredImages.map(image => (
              <Flex
                flex="1"
                flexDir="column"
                h="auto"
                mx={['0', '0', '0.5em']}
                marginBottom={['16px', '16px', '0px']}
                key={image.file.fileName}
              >
                <Link
                  href={data.link}
                  isExternal
                  title={data.projectTitle}
                  zIndex="22"
                  onClick={() => {
                    trackCustomEvent({
                      category: 'portfolio item',
                      action: 'project image click',
                      label: data.title
                    });
                  }}
                >
                  <Image
                    data-sal="slide-up"
                    data-sal-easing="ease"
                    zIndex="2"
                    h="auto"
                    w="100%"
                    mx="auto"
                    alt={image.file.fileName}
                    src={image.file.url}
                  />
                </Link>
              </Flex>
            ))}
          </Flex>
        </Box>
        <Box>
          <Text>
            <Link
              href={data.link}
              data-sal="slide-up"
              data-sal-easing="ease"
              pos="relative"
              w={['75%', '75%', '25%']}
              float="right"
              bg="#6F4541"
              color="#fff"
              zIndex="1"
              p={[
                '44px 20px 20px 20px',
                '44px 20px 20px 20px',
                '44px 20px 20px 20px'
              ]}
              marginTop={['-15px', '-15px', '-30px', '-30px']}
              isExternal
              title={data.title}
              fontSize={['1em', '1em', '1.2em']}
              onClick={() => {
                trackCustomEvent({
                  category: 'portfolio item',
                  action: 'text link click',
                  label: data.title
                });
              }}
            >
              View Project
              <Image
                src={linkImg}
                float="right"
                pos="relative"
                marginRight="8px"
                marginTop={['-5px', '-5px', '-15px']}
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
