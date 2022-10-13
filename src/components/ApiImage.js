import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ApiImage = () => {
  return (
    <Flex justifyContent='center' alignItems='center' h='157px' bgColor='#fff' borderTopRadius='15px'>
      <Text
        textAlign='center'
        color='#000'
        fontSize={20}
        fontWeight={500}
      >REST <br /> {'{ API }'}
      </Text>
    </Flex>
  )
}

export default ApiImage