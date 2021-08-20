import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

export const Error = () => {
    return (
        <Hero>
            <Banner
                title="404"
                subtitle="page not found"
            >
                <Link to='/' className='btn-primary'>return Home</Link>
            </Banner>
        </Hero>
    )
}
