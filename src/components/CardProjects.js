import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/images/wheaterapp.jpeg";

const CardProjects = ({ text }) => {

  return (
    <Box
      m='0 auto'
      maxW={["220px", "300px", "330px", "360px"]}
      transition="all 500ms ease"
      borderTopRadius='15px'
      _hover={{
        transform: "scale(1.04)",
        transition: "all 500ms ease",
        boxShadow: "2px 2px 7px 1px gray",
      }}
      borderBottomRadius='15px'
    >
      <Box>
        <Image
          borderTopRadius='10px'
          objectFit='contain' bgRepeat='no-repeat' bgPos='top left' height={"100%"} m="0 auto" src={logo}
        />
      </Box>
      <Flex borderBottomRadius='15px' p="1.2rem" bgColor="#009688d4" flexDirection={"column"}>
        <Heading
          fontSize={18}
          fontWeight={700}
          color='#fff'
          mb="12px"
          overflow="hidden"
        >
          Wheater App
        </Heading>
        <Text
          fontSize={16}
          fontWeight={400}
          color='#fff'
          h="100px"
          overflow="hidden"
        >
          {text}
        </Text>
      </Flex>
    </Box>
  );
};

export default CardProjects;
