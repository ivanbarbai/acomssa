import React from 'react'
import { Box, Image, Heading, Paragraph } from 'grommet'

const HomeExperience = () => {
    return (
        <Box pad={{ top: '40px' }} flex>
            <Box margin={{right:'50px', left:'50px'}}>
                <Heading color='#444444' margin='none' justify='start' alignSelf='start' style={{ fontSize: '72px',  }} >Hemos colaborado y apoyado a diferentes empresas por más de 20 años </Heading>
            </Box>
            <Box flex style={{ paddingTop: '20px', paddingBottom: '20px', paddingRight: '40px', paddingLeft: '40px' }}  justify="center" alignContent="center" >
                <Box direction='row-responsive' overflow='auto'  justify='center' align="center" alignContent="center">
                    <Box margin='small' background='light-2' round='medium' flex wrap gap='large' overflow='auto' width='small' height='small' justify="center" alignContent='center' align='center' alignSelf='center'>
                        <Image alt='Farmacias abc' fit='contain' width='50%' src='https://i.ibb.co/2s7qr5P/Farmacias-abc.png' />
                    </Box>
                    <Box margin='small' background='light-2' round='medium' flex wrap gap='large' overflow='auto' width='small' height='small' justify="center" alignContent='center' align='center' alignSelf='center'>
                        <Image alt='Todofacil' fit='contain' width='80%' src='https://i.ibb.co/1qMgdPr/todofacilsvg.png' />
                    </Box>
                    <Box margin='small' background='light-2' round='medium' flex wrap gap='large' overflow='auto' width='small' height='small' justify="center" alignContent='center' align='center' alignSelf='center'>
                        <Image alt='Todofacil' fit='contain' width='50%' src='https://i.ibb.co/cJXwyQJ/citijal-logo2.png' />
                    </Box>
                </Box>
                <Box align='center'>
                    <Paragraph color='#444444' >Algunas empresas con las que hemos colaborado</Paragraph>
                </Box>
            </Box>
        </Box>
    )
}

export default HomeExperience
