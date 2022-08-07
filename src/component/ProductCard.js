import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
const ProductCard = () => {
    return (
        <div className='product-container'>
            <div className='card-header'>
                <Avatar alt="Remy Sharp" src="image1.jpg" />
                <span className='userName'>@aakash1220</span>
                <MoreVertIcon  />
            </div>
            <div style={{paddingTop:'10px'}}>
                <img src='image1.jpg' className='product-image' />
            </div>
            <div>
                <h4 >
                    NFT 1
                </h4>
            </div>
        </div>
    )
}

export default ProductCard