import React from 'react'
import { Box, Image, Heading, Paragraph } from 'grommet'

const HomeExperience = () => {
    return (
        <Box pad={{ top: '40px' }} flex>
            <Box style={{ marginLeft: '50px', marginRight: '50px' }}>
                <Heading color='#444444' margin='none' justify='start' alignSelf='start' style={{ fontSize: '72px',  }} >Hemos colaborado y apoyado a diferentes empresas por más de 20 años </Heading>
            </Box>
            <Box margin='large' round='medium' flex style={{ paddingTop: '20px', paddingBottom: '20px', paddingRight: '40px', paddingLeft: '40px' }} background="light-2" justify="center" alignContent="center" >
                <Box direction='row-responsive' overflow='auto' gap='large' justify='center' align="center" alignContent="center">
                    <Box flex wrap gap='large' overflow='auto' width='50%' height='small' justify="center" alignSelf='center' >
                        <Image alt='Farmacias abc' fit='contain' src='https://i.ibb.co/2s7qr5P/Farmacias-abc.png' />
                    </Box>
                    <Box flex wrap gap='large' overflow='auto' width='50%' height='small' justify="center" alignSelf='center'>
                        <Image alt='Todofacil' fit='contain' src='https://i.ibb.co/1qMgdPr/todofacilsvg.png' />
                    </Box>
                    <Box flex wrap gap='large' overflow='auto' width='50%' height='small' justify="center" alignSelf='center'>
                        <Image alt='Todofacil' fit='contain' src='https://i.ibb.co/cJXwyQJ/citijal-logo2.png' />
                    </Box>
                </Box>
                <Box align='center'>
                    <Paragraph color='#444444' >Nos dedicamos a hacer crecer a tu empresa</Paragraph>
                </Box>
            </Box>
        </Box>
    )
}

export default HomeExperience
