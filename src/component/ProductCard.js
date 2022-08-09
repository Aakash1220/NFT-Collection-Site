import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const ProductCard = () => {
    return (
        <div className='product-container'>
            <div className='card-header'>
                <Avatar alt="Remy Sharp" src="image1.jpg" />
                <span className='userName'>@aakash1220</span>
                <MoreVertIcon  />
            </div>
            <div className='card-likes'><span>10k</span><FavoriteRoundedIcon /></div>
            <div style={{paddingTop:'10px'}}>
                <img src='image1.jpg' className='product-image' />
            </div>
            <div className='card-title'>
                <span>The Demo Title</span>
            </div>
        </div>
    )
}

export default ProductCard