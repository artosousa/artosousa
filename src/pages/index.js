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
                    }
                }
            }
        `
    )
    console.log(data)
    return (
        <div>
            <h1>no scope</h1>
            <ul>
                {data.allContentfulWork.nodes.map(node =>(
                    <li style={{color:node.colour}} key={node.id}>{node.title}</li>
                ))}
            </ul>
        </div>
    )
}