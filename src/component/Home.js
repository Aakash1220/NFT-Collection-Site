import React from 'react'
import { Button } from '@mui/material';
import ExploreTwoToneIcon from '@mui/icons-material/ExploreTwoTone';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import LiveAuction from './LiveAuction';
import { sliderData } from '../data/Constant';
const Home = () => {
  return (
    <>
    <div
      className='Home-Page'>
      <div className='homeContainer'>
        <div className='home-info'>
          <h1 className='heading'>Discover Unique
            and <span className='gradientText'>Incredible</span> rare Digital Art</h1>
          <p className='sub-heading'>Buy and Sales 100+ Cryptocurrencies with 20+ flat currencies has an using bank transfers or your credit.</p>
          <span className='redirect-btn'>
            <Button variant="contained" endIcon={<ExploreTwoToneIcon />} size='large' style={{ background: 'linear-gradient(to right, #4776E6 0%, #8E54E9 51%, #4776E6 100%)', marginRight: '20px' }}>
              Expolre Now
            </Button>
            <Button variant="contained" endIcon={<TrendingFlatIcon />} size='large' style={{ background: 'transparent', border: '2px solid #8E54E9' }}>
              Create NFT
            </Button>
          </span>
        </div>
        <div className='token-Card'>
          <Carousel
            
          indicatorIconButtonProps={{
              style: {
                  display:'none'// 2
              }
          }}
          >
            {sliderData && sliderData.map((data)=>(

           
          <div className='imageCard'>
            <img src={data.image} className=' image' />
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 20px' }} >
              <Typography variant="h6" style={{ textAlign: 'left', color: 'white' }}>
                {data.title}
              </Typography>
              <div className='image-footer'>
                <span style={{ display: 'flex', float: 'left' }} >
                  <p style={{ color: 'white' }}>Price : </p>
                  <p style={{ color: 'burlywood' }}>{" "}{data.price}</p>
                </span>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FavoriteRoundedIcon /><strong style={{ color: 'white', marginLeft: '5px' }}>{data.likes}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
          </Carousel>
        </div>
      </div>
    </div>
    <LiveAuction />
    </>
  )
}

export default Home