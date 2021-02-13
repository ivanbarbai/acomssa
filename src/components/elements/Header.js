import React from 'react'
import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu, grommet, } from 'grommet'
import { Menu as MenuIcon } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

const customHeader = deepMerge(grommet, {
    anchor: {
        textDecoration: 'none',
        fontWeight: 700,
        hover: {
            textDecoration: 'none',
        },
    },
})

const Headed = () => {
    return (
        <Grommet theme={customHeader}>
            <Header pad="large" height="xsmall" background='light-1'>
                <Anchor
                    href="/"
                    label="Acomssa"
                    color="dark-1"
                />
                <ResponsiveContext.Consumer>
                    {size =>
                        size === 'small' ? (
                            <Box justify="end">
                                <Menu
                                    a11yTitle="Navigation Menu"
                                    dropProps={{ align: { top: 'bottom', right: 'right' } }}
                                    icon={<MenuIcon color='dark-1' />}
                                    items={[
                                        {
                                            label: <Box pad="medium">Servicios</Box>,
                                            href: '/servicios',
                                        },
                                        {
                                            label: <Box pad="medium">Nosotros</Box>,
                                            href: '/nosotros',
                                        },
                                        {
                                            label: <Box pad="medium">Contacto</Box>,
                                            href: '/contacto',
                                        },
                                    ]}
                                />
                            </Box>
                        ) : (
                                <Box justify="end" direction="row" gap="medium">
                                    <Anchor href="/servicios" label="Servicios" color="dark-1" size="small" />
                                    <Anchor href="/nosotros" label="Nosotros" color="dark-1" size="small" />
                                    <Anchor href="/contacto" label="Contacto" color="dark-1" size="small" />
                                </Box>)}
                </ResponsiveContext.Consumer>
            </Header>
        </Grommet>
    )
}

export default Headed
