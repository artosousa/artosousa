import PersonalProject from './personal-project';
import PropTypes from 'prop-types';
import React from 'react';
import {Box, Heading, List} from '@chakra-ui/core';

const PersonalProjects = props => {
  const {data} = props;
  console.log(data);
  return (
    <>
      <Box maxW="70%" mx="auto" marginTop="100px" color="#f87d50">
        <Heading as="h1" marginBottom="25px">
          {data.title}
        </Heading>
        <List display="flex">
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
