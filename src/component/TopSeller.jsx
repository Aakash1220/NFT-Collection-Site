import React from 'react'
import Carousel from 'react-material-ui-carousel'

const TopSeller = () => {
  return (
    <div
    className='Home-Page auction-page'  >
         <h2 className='auction-head gradientText'>creatives </h2>
         <span style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
           
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
            <h1 className='heading' style={{color:'bisque'}}>Top Sellers</h1>
 
            </div>
            <div>
    <div className='w'>
        <img src='user.png' />
    </div>
 </div>
        </span>
    </div>
  )
}

export default TopSeller