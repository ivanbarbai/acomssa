import React from 'react'
import { Grommet, Box, Text, Anchor, Card, CardBody, CardHeader, CardFooter, grommet } from 'grommet'
import { FormNextLink } from 'grommet-icons'
import { deepMerge } from 'grommet/utils'

//SVGs
import { ReactComponent as ContabilidadSVG } from '../../../assets/media/svg/contabilidad.svg'
import { ReactComponent as FacturacionSVG } from '../../../assets/media/svg/facturacion.svg'
import { ReactComponent as FinanceSVG } from '../../../assets/media/svg/inversion.svg'
import { ReactComponent as EstructuraSVG } from '../../../assets/media/svg/balance.svg'
import { ReactComponent as InventarioSVG } from '../../../assets/media/svg/inventario.svg'

const customCard = deepMerge(grommet, {
    anchor: {
        textDecoration: 'none',
        hover: {
            textDecoration: 'none',
        },
        color: 'dark-2',
    },
    card: {
        container: {
            background: '#ffffff',
        },
    },
}

)

const data = [
    {
        icon: <ContabilidadSVG height='5em' />,
        title: 'CONTABILIDAD',
        description: 'This is a Lorem ipsum, etc, etc my bro'
    },
    {
        icon: <FacturacionSVG height='5em' />,
        title: 'FACTURACIÓN',
        description: 'This is a Lorem ipsum, etc, etc my bro'
    },
    {
        icon: <FinanceSVG height='5em' />,
        title: 'FINANZAS',
        description: 'This is a Lorem ipsum, etc, etc my bro'
    },
    {
        icon: <EstructuraSVG height='5em' />,
        title: 'ESTRUCTURA ORGANIZACIONAL',
        description: 'This is a Lorem ipsum, etc, etc my bro'
    },
    {
        icon: <InventarioSVG height='5em' />,
        title: 'LEVANTAMIENTO DE INVENTARIO',
        description: 'This is a Lorem ipsum, etc, etc my bro'
    },

]

const Identifier = ({ children, title, description, ...rest }) => (
    <Box gap='small' align='center' pad='small' {...rest} >
        {children}
        <Box flex >
            <Text size='small'>{title}</Text>
            <Text size='medium'>{description}</Text>
        </Box>
    </Box>
)

const HomeServices = () => {
    return (
        <Grommet theme={customCard}>
            <Box flex overflow='auto' background='light-1'  >
                <Box flex pad='large' justify='center' align='center' alignContent='center'>
                    <Text weight='normal' size='small' >NUESTRA PROPUESTA</Text>
                    <Text size='xxlarge' >¿Que nos hace diferentes?</Text>
                </Box>
                <Box flex overflow='auto' pad='large' direction='row-responsive' gap='medium'>
                    {data.map(value => (
                        <Card background='#ffffff' flex overflow='auto' key={value.title} elevation='none' >
                            <CardHeader pad='medium'>
                                {value.icon}
                            </CardHeader>
                            <CardBody overflow='auto' flex pad='small'>
                                <Identifier
                                    title={value.title}
                                    description={value.description}
                                    size='small'
                                >
                                </Identifier>
                            </CardBody>
                            <CardFooter>
                                <Box background='light-3' round='small' margin='medium' pad='small' width='full'>
                                    <Anchor href='/servicios' color='dark-2' label='Saber más...' icon={<FormNextLink size='medium' color='dark-2' />} />
                                </Box>
                            </CardFooter>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Grommet>
    )
}

export default HomeServices
