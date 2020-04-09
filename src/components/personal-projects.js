import PersonalProject from './personal-project';
import PropTypes from 'prop-types';
import React from 'react';
import {Box, Heading, List} from '@chakra-ui/core';

const PersonalProjects = props => {
  const {data} = props;
  return (
    <>
      <Box
        mx="auto"
        marginTop={['124px', '124px', '0px', '284px']}
        color="#f87d50"
        w="90%"
      >
        <Heading
          w={('90%', '90%', '100%')}
          as="h1"
          textAlign={['center', 'center', 'left']}
          fontSize={['2rem', '2rem', '4rem']}
          marginBottom="25px"
          mx="auto"
        >
          {data.title}
        </Heading>
        <List
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
        >
          {data.projects.map((project, index) => {
            return <PersonalProject key={index} data={project} />;
          })}
        </List>
      </Box>
    </>
  );
};

PersonalProjects.propTypes = {
  data: PropTypes.object
};
export default PersonalProjects;
