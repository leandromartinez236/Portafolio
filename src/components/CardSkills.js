import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CardSkills = ({ image, name, bgColor, color }) => {
  return (
    <Flex
      bgColor={bgColor}
      w='120px'
      alignItems='center'
      justifyContent='space-between'
      paddingInline='10px'
      borderRadius='2px'
      gap='5px'
    >
      <Image w='24px' h='24px' src={image} alt={name} />
      <Text color={color}>{name}</Text>
    </Flex>
  )
}

export default CardSkills