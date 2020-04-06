import Hero from '../components/hero';
import Projects from '../components/projects';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

export default function Index() {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        hero: contentfulHome {
          logo {
            id
            file {
              url
              fileName
            }
          }
          mainTag
          subHeading {
            id
            childMarkdownRemark {
              htmlAst
            }
          }
        }
        projects: contentfulHome {
          work {
            featuredImages {
              title
              file {
                url
                fileName
              }
            }
            link
            role
            title
            id
          }
        }
      }
    `
  );
  return (
    <>
      <Hero data={data.hero} />
      <Projects data={data.projects} />
    </>
  );
}
