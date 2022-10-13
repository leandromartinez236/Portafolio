import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CardProjects from "../components/CardProjects";
import { dataProjects } from "../data/projects";
import { selectMode } from "../features/theme";

const Projects = () => {
  const darkMode = useSelector(selectMode)
  return (
    <Box
      bgColor={darkMode ? '#1b1717' : '#fff'}
      padding='80px 0px'
      borderTop={1}
    >
      <Flex justifyContent='center' flexDir='column' align='center' m='30px 0px' gap='6px'>
        <Heading fontSize={30} textAlign="center" color={darkMode ? '#fff' : '#000'}>
          Projects
        </Heading>
        <Box width='40px' zIndex={1} h='2px' border={1} bgColor={darkMode ? 'orange' : '#4479ed'}></Box>
      </Flex>
      <Grid
        maxW='90%'
        m='0 auto'
        gridTemplateColumns="repeat(auto-fit, minmax(250px,1fr))"
        gap={["2rem", "2rem", "2rem", "4rem"]}
      >
        {dataProjects.map((project) => (
          <CardProjects
            key={project.id}
            data={project}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
