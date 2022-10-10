import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../assets/images/flutter.png";

const CardProjects = ({ text }) => {
  return (
    <Box bgColor="red.400" p='15px' w="220px" h='350px' maxH='350px'>
      <Image w="100%" objectFit='contain'
        // h="80px" 
        h='38%'
        src={logo} />
      <Text
        //  maxH='170px' 
        pt='15px'
        maxH='60%'
        overflow='hidden'
        textOverflow='clip'>
        {text}
      </Text>
    </Box>
  );
};

export default CardProjects;
