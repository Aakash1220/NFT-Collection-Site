import React,{useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import './header.scss'
import Typography from '@mui/material/Typography';
import { Button,TextField} from '@mui/material';
const Header = () => {

const [navbar,setNavbar]=useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <>
      <Box className={navbar ? 'navbar-BGC material-header-box':"material-header-box"}>

        <img src='NewNFT.png' style={{ height: 'auto', width: '40px' }} />
        <div className='menu-List'>
          <Typography sx={{ minWidth: 100 ,color:'white'}}>Home</Typography>
          <Typography sx={{ minWidth: 100 ,color:'white' }}>Explore</Typography>
          <Typography sx={{ minWidth: 100 ,color:'white' }}>Activity</Typography>
          <Typography sx={{ minWidth: 100  ,color:'white'}}>Contact</Typography>
        </div>
        <div className='menu-List menu-serachDiv'>
        <TextField
          
        
          type="search"
          id="outlined-size-small filled-search"
          size="small"
         placeholder='Search'
        />
          <Button size="small" variant="contained" className='btn-grad'>Create</Button>

        </div>
      </Box>
    </>
  )
}

export default Header