import Project from './project';
import React from 'react';
import {Box, List} from '@chakra-ui/core';

const Projects = props => {
  const {data} = props;
  console.log(data);
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

export default Projects;
