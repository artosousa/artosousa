import React from 'react'
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
                            }
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
                        <h2>{node.title}</h2>
                        {node.featuredImages.map(image => <img key={node.title} src={image.file.url}/>)}
                    </li>
                ))}
            </ul>
        </div>
    )
}