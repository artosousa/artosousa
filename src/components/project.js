import React from 'react';
import { ListItem, Box, Text, Image  } from "@chakra-ui/core";

const Project = (props) => { 
    const {data} = props;
    console.log(data);
    return (
        <>
            <ListItem key={data.id}>
                <Box  bg="tomato" width="25%">
                    <Text fontSize="m" color="#000">{data.title}</Text>
                    <Text fontSize="xl" fontWeight="bolder" color="#fff">{data.role}</Text>
                </Box>
                <Box>
                    {data.featuredImages.map(image => <Image key={image.file.fileName} alt={image.file.fileName} src={image.file.url}/>)}
                </Box>
            </ListItem>
        </>
    )
}

export default Project;