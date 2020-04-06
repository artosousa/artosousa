import React from 'react';
import { Image, Box } from '@chakra-ui/core';
import headerBG from '../assets/heroBG.jpg';

const Hero = (props) => { 
    const {data} = props;
    console.log(data);
    return (
        <>
            <Box  bgImage={`url(${headerBG})`}  bgPos="center" bgRepeat="no-repeat" >
                <Image key={data.logo.id} src={data.logo.file.url}/>
                <h1>{data.mainTag}</h1>
                <div dangerouslySetInnerHTML={{__html: data.subHeading.childMarkdownRemark.html}}/>
            </Box>
        </>
    )
}

export default Hero;