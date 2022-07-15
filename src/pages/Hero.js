import React from "react";
import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import imageHero from "../assets/images/hero.jpg";
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
        flexDir='column'
      >
        <Flex
          alignSelf='flex-start'
          w='60%'
          flexDir='column'
        >
          <Heading fontSize='2.4rem' mb='0.7rem'>Hola soy Leandro!</Heading>
          <Text fontSize='1.2rem'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            quia fugit odio error reprehenderit!
          </Text>
        </Flex>
        <Box position='absolute' top='90%' fontSize='1.4rem'>⬇</Box>
      </Flex>
    </Box>
  );
};

export default Hero;
