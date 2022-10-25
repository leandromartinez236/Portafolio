import React from "react";
import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import imageHero from "../assets/images/hero.jpg";
import '../components/_styles.css'

const Hero = () => {
  return (
    <Box
      bgImage={imageHero}
      w="100vw"
      maxW="100%"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center center"
    >
      <Flex
        color='#fff'
        h='100%'
        maxW='75%'
        m='0 auto'
        justifyContent='center'
        align='center'
        flexDir='column-reverse'
      >
        <Flex
          alignSelf='flex-start'
          width={['100%', '60%', '75%', '60%']}
          flexDir='column'
        >
          <Heading fontSize='2.4rem' mb='0.7rem'>Hola soy Leandro!</Heading>
          <Text fontSize='1.2rem'>
            Programador FullStack🔋. Entusiasta en el desarrollo web y dispuesto a adquirir nuevos conocimientos🎯
          </Text>
        </Flex>
        <Box position='sticky' top='91%' p='20px 0px'>
          <Flex margin='0px auto'
            w='15px'
            h='35px'
            border='3px solid white'
            borderRadius='20px'
            display='flex'>
            <Box className="mouse-scroll"></Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
