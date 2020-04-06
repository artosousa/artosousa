import Project from './project';
import PropTypes from 'prop-types';
import React from 'react';
import {Box, List} from '@chakra-ui/core';

const Projects = props => {
  const {data} = props;
  return (
    <>
      <Box maxW="containers.xl" mx="auto">
        <List>
          {data.work.map((project, index) => {
            return <Project key={index} data={project} />;
          })}
        </List>
      </Box>
    </>
  );
};

Projects.propTypes = {
  data: PropTypes.object
};
export default Projects;
