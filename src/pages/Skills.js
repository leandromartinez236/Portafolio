import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import CardSkills from '../components/CardSkills'
import { skills } from '../data/data'
import { selectMode } from '../features/theme'

const Skills = () => {
  const darkMode = useSelector(selectMode)
  return (
    <Box
      bgColor={darkMode ? '#1b1717' : '#fff'}
      padding='60px 0px'
    >
      <Flex justifyContent='center' flexDir='column' align='center'>
        <Heading fontSize={30} textAlign='center' margin='0' color={darkMode ? '#fff' : '#000'}>
          Skills
        </Heading>
        <Box width='40px' h='2px' border={1} bgColor={darkMode ? 'orange' : '#4479ed'}></Box>
      </Flex>
      <Box maxW='60%' m='40px auto'>
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(105px,1fr))"
          gap='10px'
        >
          {skills.map(({ image, name, bgColor, color }) => (
            <CardSkills
              image={image}
              name={name}
              bgColor={bgColor}
              color={color}
            />
          )
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default Skills