//modules
import React from 'react'
import { Grommet } from 'grommet'

//primary components
import HomeBanner from './components/HomeBanner'
import HomeExperience from './components/HomeExperience'

//secondary components

const HomePage = () => {
    return (
        <Grommet>
            <HomeBanner />
            <HomeExperience />  
        </Grommet>
    )
}

export default HomePage