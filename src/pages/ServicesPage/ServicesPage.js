import React from 'react'

//primary components
import ServicesBanner from './components/ServicesBanner'

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
        opacity: 0.8,
    },
}

const ServicesPage = () => {
    return (
            <Motioned variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
                <ServicesBanner />
            </Motioned>
    )
}

export default ServicesPage
