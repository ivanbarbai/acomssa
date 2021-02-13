import React from 'react'
import { Grommet, Box, Heading, Paragraph, Text } from 'grommet'

const HomeExperience = () => {
    return (
        <Box style={{paddingTop:'20px', paddingBottom:'20px', paddingRight:'40px', paddingLeft:'40px' }} background="neutral-3" justify="center" align="center" alignContent="center" >
            <Box>
                <Paragraph size="large" >25 años nos respaldan</Paragraph>
            </Box>
            <Box direction="row-responsive" justify='between' align='stretch' alignContent='between' width='full' >
                <Box pad="large" background="neutral-4" margin="small" />
                <Box pad="large" background="neutral-4" margin="small" />
                <Box pad="large" background="neutral-4" margin="small" />   
            </Box>
        </Box>
    )
}

export default HomeExperience
