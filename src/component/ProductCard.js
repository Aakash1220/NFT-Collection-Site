import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Button } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const ProductCard = (props) => {
    return (
        <div className='product-container'>
            <div className='card-header'>
                <Avatar alt="Remy Sharp" src="image1.jpg" />
                <span className='userName'>{props.createdBy}</span>
                <MoreVertIcon  />
            </div>
            <div className='card-likes'><span>{props.likes}</span><FavoriteRoundedIcon /></div>
            <div style={{paddingTop:'10px'}}>
                <img src={props.image} className='product-image' />
            </div>
            <div className='card-title'>
                <span>{props.title}</span>
            </div>
            <div className='card-footer-info'>
                <span className='card-title2'>Price:<span style={{ color: 'burlywood' }}>{props.price}</span></span>
                <Button variant="contained"  size='small' style={{ background: 'linear-gradient(to right, #4776E6 0%, #8E54E9 51%, #4776E6 100%)',fontSize:'10px' }}>
                    Place Bid
</Button>
            </div>
        </div>
    )
}

export default ProductCard