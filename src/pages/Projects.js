import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CardProjects from "../components/CardProjects";

const Projects = () => {
  const pr =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Sed, nostrum doloremque impedit libero animi neque iste delectus cum! In nobis voluptatem rerum quod fugiat voluptate ex quas ea fugit saepe nemo, dicta eveniet sunt sint eius id optio vel asperiores reiciendis aperiam alias autem tempora dolores impedit.Provident, ex nulla ?";
  const p2 =
    "Lorem iluptate ex quas ea fugit saepe nemo, dicta eveniet sunt ?";
  return (
    <Box bgColor="gray">
      <Heading fontSize={30} textAlign="center" color="#000">
        Projects
      </Heading>
      <Flex>
        <CardProjects text={pr} />
        <CardProjects text={p2} />
        {/* <CardProjects /> */}
      </Flex>
    </Box>
  );
};

export default Projects;
