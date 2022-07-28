import React from 'react'
import { Box, Text, Heading, Flex } from '@chakra-ui/react'
import './navbar.css'
const NavBar = () => {
  const stylesNavBar = {
    header: {
      position: 'fixed',
      zIndex: 100,
      backgroundColor: '#1f232182',
      width: '100%',
      top: '0%'
    },
    navBar: {
      maxWidth: '85%',
      margin: '0 auto',
      padding: '20px 0'
    },
  }
  return (
    <Box style={stylesNavBar.header} backdropFilter='blur(2px)'>
      <Box style={stylesNavBar.navBar}>
        <Flex gap='2rem' justifyContent='space-between' >
          <Text color='#fff' m='0'>Leandro()</Text>
          <label class="switch">
            <input id="bdark" type="checkbox" />
            <span class="slider"></span>
          </label>
        </Flex>
      </Box>
    </Box>
  )
}

export default NavBar