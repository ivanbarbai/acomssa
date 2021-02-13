import React from 'react'
import { Footer, Text, Box,  } from 'grommet'

const Footed = () => {
    return (
        <Footer background="dark-5" pad={{ horizontal: 'large', vertical: 'small' }}>
            <Box 
            direction="row" 
            gap="small"
            >
                <Text alignSelf="center">Acomssa</Text>
            </Box>
            <Text textAlign="center" size="small">© 2019 Copyright</Text>
        </Footer>
    )
}

export default Footed
