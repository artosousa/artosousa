import React from 'react'
import { Box, Image, Text } from "@chakra-ui/core";
import {
    graphql,
    useStaticQuery
} from 'gatsby'

export default () => {
    const data = useStaticQuery(
        graphql`
            query MyQuery {
                allContentfulWork {
                    nodes {
                        id
                        title
                        colour
                        featuredImages {
                            file {
                              url
                              fileName
                            }
                            contentful_id
                        }
                    }
                }
                contentfulHome {
                    title
                }
            }
        `
    )
    console.log(data)
    return (
        <div>
            <h1>{data.contentfulHome.title}</h1>
            <ul>
                {data.allContentfulWork.nodes.map(node =>(
                    <li style={{color:node.colour}} key={node.id}>
                            <Box 
                            bg="tomato" 
                            w="100%" 
                            color="white"
                            fontSize="m"
                            borderWidth="1px"
                            borderWidth="1px" 
                            rounded="lg"
                            d="flex" 
                            mt="2" 
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text fontSize="xl">{node.title}</Text>
                            {node.featuredImages.map(image => <Image key={image.contentful_id} alt={image.fileName} src={image.file.url}/>)}
                        </Box>
                    </li>
                ))}
            </ul>
        </div>
    )
}