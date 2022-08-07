import React from 'react'
import ModeStandbyTwoToneIcon from '@mui/icons-material/ModeStandbyTwoTone';
import ProductCard from './ProductCard';
const LiveAuction = () => {
  return (
    <>
    <div
      className='Home-Page auction-page'  style={{height:'70vh'}}>

        <h2 className='auction-head gradientText'>Auctions </h2>
        <span style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <ModeStandbyTwoToneIcon />
            <h1 className='heading' style={{color:'bisque',marginLeft:'12px'}}>live Auction</h1>
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