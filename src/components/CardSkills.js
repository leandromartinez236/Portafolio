import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CardSkills = ({ image, name, bgColor, color }) => {
  return (
    <Flex
      bgColor={bgColor}
      alignItems='center'
      justifyContent='space-evenly'
      paddingInline='10px'
      borderRadius='2px'
      gap='8px'
    >
      <Image w='24px' h='24px' src={image} alt={name} />
      <Text fontSize='12px' fontWeight='bold' color={color}>{name}</Text>
    </Flex>
  )
}

export default CardSkills