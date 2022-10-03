import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import './navbar.css'
import { useSelector } from 'react-redux'
import { selectMode } from '../features/theme'

const NavBar = () => {
  const darkMode = useSelector(selectMode)

  const stylesNavBar = {
    header: {
      position: 'fixed',
      zIndex: 100,
      backgroundColor: `${darkMode ? '#f5f5dc91' : '#407cffe6'}`,
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
          <label className="switch">
            <input id="bdark" type="checkbox" onClick={() => { }} />
            <span className="slider"></span>
          </label>
        </Flex>
      </Box>
    </Box>
  )
}

export default NavBar