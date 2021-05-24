import React from 'react'
import './LiveAnywhere.css'
import {Card} from '../GetComponents'

const data = [
    {
        id: 1,
        cardHeader: false,
        cardContent: {
            img: 'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320',
            caption: 'Entire homes',
        },

        cardFooter: {
            title: 'Entire homes',
        },
    },
    {
        id: 2,
        cardHeader: false,
        cardContent: {
            img: 'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320',
            caption: 'Unique stays',
        },

        cardFooter: {
            title: 'Unique stays',
        },
    },
    {
        id: 3,
        cardHeader: false,
        cardContent: {
            img: 'https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=320',
            caption: 'Farms and nature',
        },

        cardFooter: {
            title: 'Farms and nature',
        },
    },
]

const LiveAnywhere = () => {
    return (
        <>
            <section className='liveAnywhere'>
                <h2 className='h2'>Live Anywhere</h2>
                <div className='cardsContainer MT3'>
                    {data.map(card => {
                        const {id, cardHeader, cardContent, cardFooter} = card
                        return (
                            <Card
                                key={id}
                                cardHeaderContent={cardHeader}
                                cardContent={cardContent}
                                cardFooterContent={cardFooter}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default LiveAnywhere
