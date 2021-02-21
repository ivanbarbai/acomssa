//modules
import React from 'react'

//primary components
import HomeBanner from './components/HomeBanner'
import HomeExperience from './components/HomeExperience'
import HomeServices from './components/HomeServices'
import HomeAbout from './components/HomeAbout'

//secondary components
import { Motioned } from '../../components/framer/Styles'

//motioned
const containerVariants = {
    hidden: {
        opacity: 0.8,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0.99,
        
    },
}

const HomePage = () => {
    return (
        <Motioned variants={containerVariants} initial='hidden' animate='visible' exit='exit' >
            <HomeBanner />
            <HomeServices />
            <HomeAbout />
            <HomeExperience />
        </Motioned>
    )
}

export default HomePage