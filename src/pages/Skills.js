import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import CardSkills from '../components/CardSkills'
import { skills } from '../data/data'
import { selectMode } from '../features/theme'

const Skills = () => {
  const darkMode = useSelector(selectMode)
  return (
    <Box
      bgColor={darkMode ? 'rgb(36, 27, 34)' : '#fff'}
      padding='10px 0px'
    >
      <Heading textAlign='center' margin='0' color={darkMode ? '#f3ff00' : '#000'}>Skills</Heading>
      <Box maxW='80%' m='0 auto'>
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(105px,1fr))"
          gap={7}
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