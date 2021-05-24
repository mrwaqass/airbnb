import React from 'react'
import {Link} from 'react-router-dom'

function SingleLinksColumn({title, links}) {
    return (
        <article className='singleLinksColumn'>
            <p className='footerTitle'>{title}</p>
            {links.map(item => {
                const {id, name, url} = item
                return (
                    <p key={id} className='footerLinksTitle'>
                        <Link to={url}>{name}</Link>
                    </p>
                )
            })}
        </article>
    )
}

export default SingleLinksColumn
