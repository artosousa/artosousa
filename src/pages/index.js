import Brands from '../components/brands';
import Hero from '../components/hero';
import Projects from '../components/projects';
import React from 'react';
import {Box} from '@chakra-ui/core';
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
        contentfulBrandList {
          brands {
            brandTile
            id
            brandLogo {
              file {
                url
                fileName
              }
            }
          }
        }
      }
    `
  );
  return (
    <>
      <Box bg="#f8f8f8" paddingBottom="150px">
        <Hero data={data.hero} />
        <Projects data={data.projects} />
        <Brands data={data.contentfulBrandList} />
      </Box>
    </>
  );
}
