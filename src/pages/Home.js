import React from 'react'
import {useGlobalContext} from '../context'
import {
    Banner,
    LiveAnywhere,
    CircularProgress,
    BecomeHost,
    Discover,
} from '../GetComponents'

function Home() {
    const {isLoading} = useGlobalContext()

    if (isLoading) {
        return (
            <div className='loading'>
                <CircularProgress color='secondary' />
            </div>
        )
    }
    return (
        <div className='home'>
            <Banner />
            <LiveAnywhere />
            <BecomeHost />
            <Discover />
        </div>
    )
}

export default Home
