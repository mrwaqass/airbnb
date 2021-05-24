import React from 'react'
import './SearchResult.css'
import {Star, FavoriteBorderIcon} from '../../GetIcons'
import {IconButton} from '../../GetComponents'
import {Link} from 'react-router-dom'

function SearchResult({
    img,
    tag,
    heading,
    title,
    excerpt,
    star,
    reviews,
    oldPrice,
    price,
    total,
}) {
    return (
        <article className='searchResult'>
            <Link to='/'>
                <div className='searchResultImagesConatiner'>
                    <img src={img} alt={title} className='searchResultImage' />
                    {tag && <p className='searchResultImageTag'>{tag}</p>}
                </div>
            </Link>
            <div className='searchResultInfoContainer'>
                <div className='searchResultInfo'>
                    <div className='searchResultInfoTop'>
                        <p className='searchResultInfoLocationHeading'>
                            {heading}
                        </p>
                        <Link to='/'>
                            <p className='searchResultInfoTitle'>{title}</p>
                        </Link>
                        <hr className='searchResultInfoTitleHR' />
                        <p className='searchResultInfoExcerpt'>{excerpt}</p>
                    </div>
                    <div className='searchResultInfoBottom'>
                        <Star className='colorPrimary' />
                        <span className='rating'>{star} </span>
                        <span className='reviews'>({reviews} reviews)</span>
                    </div>
                    <IconButton className='searchResultInfoHeart'>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <div className='priceConatiner'>
                        <div className='priceContainerPrice'>
                            <span className='actualPrice'>${oldPrice}</span>
                            <span className='salePrice'>${price}</span>
                            <span className='night'> / night</span>
                        </div>
                        <p className='totalPrice'>${total} total</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SearchResult
