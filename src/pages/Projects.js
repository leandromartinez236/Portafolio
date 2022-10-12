import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CardProjects from "../components/CardProjects";
import { selectMode } from "../features/theme";

const Projects = () => {
  const darkMode = useSelector(selectMode)
  const pr =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Sed, nostrum doloremque impedit libero animi neque iste delectus cum! In nobis voluptatem rerum quod fugiat voluptate ex quas ea fugit saepe nemo, dicta eveniet sunt sint eius id optio vel asperiores reiciendis aperiam alias autem tempora dolores impedit.Provident, ex nulla ?";
  const p2 =
    "Lorem iluptate ex quas ea fugit saepe nemo, dicta eveniet sunt ?";
  return (
    <Box
      bgColor={darkMode ? '#1b1717' : '#fff'}
      borderTop={1}>
      <Flex justifyContent='center' flexDir='column' align='center'>
        <Heading fontSize={30} textAlign="center" color="#000">
          Projects
        </Heading>
        <Box width='40px' h='2px' border={1} bgColor={darkMode ? 'orange' : '#4479ed'}></Box>
      </Flex>
      <Grid
        maxW='90%'
        m='0 auto'
        gridTemplateColumns="repeat(auto-fit, minmax(230px,1fr))"
        gap={["2rem", "2rem", "2rem", "4rem"]}
      >
        <CardProjects text={pr} />
        <CardProjects text={p2} />
        <CardProjects text={pr} />
      </Grid>
    </Box>
  );
};

export default Projects;
