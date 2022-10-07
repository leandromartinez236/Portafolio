import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectMode } from '../features/theme'

const CardSkills = ({ image, name, bgColor, color }) => {
  const darkMode = useSelector(selectMode)
  return (
    <Flex
      bgColor={!darkMode ? bgColor : 'rgb(36, 27, 34)'}
      alignItems='center'
      justifyContent='space-evenly'
      paddingInline='10px'
      borderRadius='2px'
      gap='8px'
    >
      <Image borderRadius={2} w='24px' h='24px' src={image} alt={name} />
      <Text fontSize='12px' letterSpacing={0.5} fontWeight='bold' color={color}>{name}</Text>
    </Flex>
  )
}

export default CardSkills