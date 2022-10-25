import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectMode } from '../features/theme'

const Label = ({ text }) => {
  const darkMode = useSelector(selectMode)
  return (
    <Box bgColor={darkMode ? 'brown' : '#336199'} p='5px 8px' borderRadius='20px'>
      <Text letterSpacing={0.3} fontSize='12px' color='#fff' fontWeight='semibold'>{text}</Text>
    </Box>
  )
}

export default Label