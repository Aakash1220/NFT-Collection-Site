import React from 'react'
import Box from '@mui/material/Box';
import './header.scss'
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <>
        <Box className='material-header-box'>
     <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        </Box>
    </>
  )
}

export default Header