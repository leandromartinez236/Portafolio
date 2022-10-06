import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectMode } from '../features/theme'

const Skills = () => {
  const darkMode = useSelector(selectMode)
  return (
    <Box
      bgColor={darkMode ? 'rgb(36, 27, 34)' : '#fff'}
      padding='10px 0px'
    >
      <Heading textAlign='center' margin='0'>Skills</Heading>
    </Box>
  )
}

export default Skills