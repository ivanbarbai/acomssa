import React from 'react'
import { Box, Image, Text } from 'grommet'


const data = [
    {
        title: 'Farmacias abc',
        image: 'https://i.ibb.co/2s7qr5P/Farmacias-abc.png'
    },
    {
        title: 'Todo fácil',
        image: 'https://i.ibb.co/1qMgdPr/todofacilsvg.png'
    },
    {
        title: 'Todo fácil',
        image: 'https://i.ibb.co/cJXwyQJ/citijal-logo2.png'
    },

]

const HomeExperience = () => {
    return (
        <Box pad='large' flex  >
            <Box justify='center' align='center' alignContent='center' margin='medium'>
                <Text color='#444444' size='small' >CLIENTES COMERCIALES</Text>
                <Text color='#444444' size='xlarge' >Hemos colaborado y apoyado a diferentes empresas por más de 20 años </Text>
            </Box>
            <Box pad='large' flex justify="center" alignContent="center" >
                <Box direction='row-responsive' overflow='auto' justify='center' align="center" alignContent="center">
                    {data.map(value => (
                        <Box margin='small' flex wrap gap='large' overflow='auto'  height='small' alignSelf='center' justify='center' alignContent='center' align='center' >
                            <Image fit='contain' width='60%' src={value.image} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default HomeExperience
