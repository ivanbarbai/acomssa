//modules
import React from 'react'

//primary components
import HomeBanner from './components/HomeBanner'
import HomeExperience from './components/HomeExperience'
import HomeServices from './components/HomeServices'

//secondary components

const HomePage = () => {
    return (
        <>
            <HomeBanner />
            <HomeExperience />
            <HomeServices />
        </>
    )
}

export default HomePage