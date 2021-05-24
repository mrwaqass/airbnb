import React from 'react'
import './Discover.css'
import {Card} from '../GetComponents'

const data = [
    {
        id: 1,
        cardHeader: false,
        cardContent: {
            img: 'https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320',
            caption: 'Featured collection: Wanderlust',
        },

        cardFooter: {
            title: 'Featured collection: Wanderlust',
            subtitle: 'Travel from home with Online Experiences.',
        },
    },
    {
        id: 2,
        cardHeader: false,
        cardContent: {
            img: 'https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720',
            caption: 'Online Experiences',
        },

        cardFooter: {
            title: 'Online Experiences',
            subtitle: 'Live, interactive activities led by Hosts.',
        },
    },
    {
        id: 3,
        cardHeader: false,
        cardContent: {
            img: 'https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320',
            caption: 'Experiences',
        },

        cardFooter: {
            title: 'Experiences',
            subtitle: 'Local things to do, wherever you are.',
        },
    },
]

function Discover() {
    return (
        <section className='discoverContainer MT2'>
            <h2 className='h2'>Discover Experiences</h2>
            <p className='sectionSubtitle'>
                Unique activities with local experts—in person or online.
            </p>
            <div className='cardsContainer MT2'>
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
    )
}

export default Discover
