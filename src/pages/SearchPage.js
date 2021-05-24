import React from 'react'
import './SearchPage.css'
import {Button, SearchResult} from '../GetComponents'
const data = [
    {
        id: 1,
        tag: 'superhost',
        heading: 'Entire apartment in Lahore',
        title: 'Luxury Apartment',
        excerpt: 'lorem lipsum 2 beds . 4 chairs',
        star: 4.9,
        reviews: 13,
        oldPrice: 79,
        price: 50,
        total: 1200,
        img: 'https://a0.muscache.com/im/pictures/114b3f47-e927-4c98-a190-9ad979b6aed5.jpg?im_w=960',
    },
    {
        id: 2,
        tag: '',
        heading: 'Entire apartment in Lahore',
        title: 'Elegant and Lusury Apartment',
        excerpt: 'lorem lipsum 2 beds . 4 chairs',
        star: 5,
        reviews: 5,
        oldPrice: 120,
        price: 90,
        total: 1800,
        img: 'https://a0.muscache.com/im/pictures/miso/Hosting-18243463/original/ccd64758-ccd7-4bdb-ae3d-12c480f6ad2c.jpeg?im_w=960',
    },
]
function SearchPage() {
    return (
        <section className='searchPage'>
            <div className='searchPageInfo'>
                <p className='searchPageInfoTopPara'>
                    <span className='searchPageInfoTopParaSpan'>62 stays</span>
                    <span className='searchPageInfoTopParaSpan'>
                        26 august to 30 august
                    </span>
                    <span className='searchPageInfoTopParaSpan'>2 guest</span>
                </p>
                <h2 className='h2'>Places to stay near you</h2>
                <div className='searchPageButtonsContainer'>
                    <Button variant='outlined' className='btn btnOutlined'>
                        Cancellation flexibility
                    </Button>
                    <Button variant='outlined' className='btn btnOutlined'>
                        Type of place
                    </Button>
                    <Button variant='outlined' className='btn btnOutlined'>
                        Price
                    </Button>
                    <Button variant='outlined' className='btn btnOutlined'>
                        Rooms and beds
                    </Button>
                    <Button variant='outlined' className='btn btnOutlined'>
                        More filters
                    </Button>
                </div>
            </div>
            <section className='searchResults'>
                {data.map(item => {
                    return <SearchResult key={item.id} {...item} />
                })}
            </section>
        </section>
    )
}

export default SearchPage
