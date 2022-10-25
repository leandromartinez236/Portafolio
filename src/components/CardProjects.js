import React from "react";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectMode } from "../features/theme";
import ApiImage from "./ApiImage";
import Label from "./Label";

const CardProjects = ({ data }) => {
  const darkMode = useSelector(selectMode)
  return (
    <Box
      m='0 auto'
      maxW={["260px", "300px", "330px", "360px"]}
      transition="all 500ms ease"
      borderTopRadius='15px'
      h='fit-content'
      _hover={{
        transform: "scale(1.04)",
        transition: "all 500ms ease",
        boxShadow: "2px 2px 7px 1px gray",
      }}
      borderBottomRadius='15px'
    >
      <Box>
        {data?.image ? <Image
          borderTopRadius='10px'
          objectFit='contain' bgRepeat='no-repeat' bgPos='top left' height={"100%"} m="0 auto" src={data?.image}
        />
          : <ApiImage />
        }
      </Box>
      <Flex borderBottomRadius='15px' p="1.2rem" bgColor={darkMode ? "#241b22" : "#009688d4"} flexDirection={"column"}>
        <Heading
          fontSize={18}
          fontWeight={700}
          color={darkMode ? 'orange' : '#fff'}
          textAlign='center'
          mb="12px"
          overflow="hidden"
        >
          {data?.title}
        </Heading>
        <Text
          fontSize={16}
          fontWeight={400}
          color='#fff'
          h="100px"
          overflow="hidden"
        >
          {data?.text}
        </Text>
        <Flex mt='16px' justifyContent='space-between'>
          <Link href={data?.github} isExternal><Text color='#fff' fontSize={13} fontWeight={500}>Ver Código</Text></Link>
          {data?.web && (
            <Link href={data.web} isExternal><Text color='#fff' fontSize={13} fontWeight={500}>Ir al sitio</Text></Link>
          )}
        </Flex>
        <Flex mt='15px' flexWrap='wrap' gap='10px'>
          {data?.technologies?.map((technology, index) => (
            <Label key={index} text={technology} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardProjects;
