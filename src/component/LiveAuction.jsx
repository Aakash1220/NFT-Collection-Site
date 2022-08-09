import React from 'react'
import ModeStandbyTwoToneIcon from '@mui/icons-material/ModeStandbyTwoTone';
import ProductCard from './ProductCard';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Button } from '@mui/material';
const LiveAuction = () => {
  return (
    <>
    <div
      className='Home-Page auction-page'  >

        <h2 className='auction-head gradientText'>Auctions </h2>
        <span style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
            <ModeStandbyTwoToneIcon />
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
            <h1 className='heading' style={{color:'bisque',marginLeft:'12px'}}>live Auction</h1>
 <Button variant="text" endIcon={<TrendingFlatIcon />} size='large' style={{ background: 'transparent',color:'white' }}>
              Explore more
            </Button>
            </div>
        </span>
        <div className='auction-tokens'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </div>
        </div>
        </>
  )
}

export default LiveAuction