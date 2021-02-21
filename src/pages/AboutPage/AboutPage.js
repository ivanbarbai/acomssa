import React from 'react'


//Primary components
import AboutBanner from './components/AboutBanner'

//secondary components
import {Motioned} from '../../components/framer/Styles'

//motioned
const containerVariants = {
    hidden: {
        opacity: 0.8,

    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0.8,
    },
}

const AboutPage = () => {
    return (
        <Motioned variants={containerVariants} initial='hidden' animate='visible' exit='exit' >
            <AboutBanner />
        </Motioned>
    )
}

export default AboutPage
