import React from 'react'
import { Footer, Text, Box, Anchor, Grommet, grommet, } from 'grommet'
import { deepMerge } from 'grommet/utils'

const customAnchor = deepMerge(grommet, {
    anchor: {
        textDecoration: 'none',
        fontWeight: 700,
        hover: {
            textDecoration: 'none',
        },
        color:'#ffffff',
    },
    text:{
        color:'#ffffff'
    }
})

const Footed = () => {
    return (
        <Grommet theme={customAnchor}>
            <Footer background="#5966F0" pad={{ horizontal: 'large', vertical: 'small' }}>
                <Box
                    direction="row"
                    gap="small"
                >
                    <Anchor href='/' alignSelf="center">Acomssa</Anchor>
                </Box>
                <Text textAlign="center" size="small">© 2019 Copyright</Text>
            </Footer>
        </Grommet>
    )
}

export default Footed
