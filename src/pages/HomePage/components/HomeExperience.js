import React from 'react'
import { Box, Paragraph } from 'grommet'

const HomeExperience = () => {
    return (
        <Box flex style={{paddingTop:'20px', paddingBottom:'20px', paddingRight:'40px', paddingLeft:'40px' }} background="light-4" justify="center" align="center" alignContent="center" >
            <Paragraph>25 años de experiencia</Paragraph>
            <Box flex wrap direction='row-responsive' overflow='auto' gap='large' >
                <Box background='neutral-3' pad='large' ></Box>
                <Box background='neutral-3' pad='large' ></Box>
                <Box background='neutral-3' pad='large' ></Box>
            </Box>
        </Box>
    )
}

export default HomeExperience
