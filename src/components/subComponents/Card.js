import React from 'react'

function Card({cardHeaderContent, cardFooterContent, cardContent}) {
    const {img, caption} = cardContent
    return (
        <article className='card'>
            {cardHeaderContent && (
                <CardHeader cardHeaderContent={cardHeaderContent} />
            )}
            <div className='cardContent'>
                <a href='https:google.com'>
                    <img
                        className='image'
                        src={`${img && img}`}
                        alt={`${caption && caption}`}
                        title={`${caption && caption}`}
                    />
                </a>
            </div>
            {cardFooterContent && (
                <CardFooter cardFooterContent={cardFooterContent} />
            )}
        </article>
    )
}
function CardHeader({cardHeaderContent}) {
    return (
        <div className='cardHeader'>
            <h2>Cards header</h2>
        </div>
    )
}
function CardFooter({cardFooterContent}) {
    const {title, subtitle} = cardFooterContent
    return (
        <div className='cardFooter'>
            <p className='cardFooterTitle'>{title && title}</p>
            <p className='cardFooterSubtitle'>{subtitle && subtitle}</p>
        </div>
    )
}

export default Card
