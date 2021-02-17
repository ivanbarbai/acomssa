import React, { useState } from 'react'
import { Grommet, Box, Heading, Paragraph, Text, Anchor, Form, grommet, FormField, TextInput, Button } from 'grommet'
import { FormNextLink } from 'grommet-icons'

import { deepMerge } from 'grommet/utils';

const customAnchor = deepMerge(grommet, {
    anchor: {
        textDecoration: 'none',
        fontWeight: 700,
        hover: {
            textDecoration: 'none',
        },
    },
    formField: {
        label: {
            color: 'light-1',
            size: 'small',
            weight: 400,
            margin: '0px'
        },
        input: {
            content: {
                color: 'light-1'
            }
        },

        border: {
            color: 'light-1',
        },
        margin: {
            bottom: '18px'
        },
    },

})



const HomeBanner = () => {
    const [value, setValue] = useState();

    return (
        <Grommet theme={customAnchor}>
            <Box margin='large' flex overflow='auto' background="light-2" round='medium' pad="large" direction='row-responsive' gap='small' >
                <Box flex overflow='auto' wrap pad="large" justify='around' alignContent='around'>
                    <Box wrap flex>
                        <Heading size="xlarge" level="2" margin='none' >Te ayudamos con tu contabilidad</Heading>
                    </Box>
                    <Box wrap>
                        <Heading level="4" >Realizamos una alta gama de servicios especializados en la asesoría comercial contable, financiera y estructura organizacional.</Heading>
                        <Paragraph>Te facilitamos los procesos contables ya seas una PyME o Persona física.</Paragraph>
                        <Paragraph>Comunicate con nosotros para más información.</Paragraph>
                    </Box>
                    <Anchor href="/servicios">
                        <Box flex style={{ maxWidth: '360px' }} elevation='small' direction="row" round='small' pad="small" background="status-ok">
                            <FormNextLink color='light-1' size="medium" style={{ marginRight: '10px' }} />
                            <Text color="light-1">Conoce nuestros servicios</Text>
                        </Box>
                    </Anchor>
                </Box>

                <Box flex wrap overflow='auto' elevation="large" round="medium" direction="row-responsive" >
                    <Box background="#5587E6" pad="large" overflow='auto'>
                        <Form
                            value={value}
                            onChange={nextValue => setValue(nextValue)}
                            onReset={() => setValue({})}
                            onSubmit={({ value }) => { }}
                        >
                            <Box flex>
                                <Heading margin='none' level="4" color='light-1' style={{ marginBottom: '24px' }} >Contactanos</Heading>
                            </Box>
                            <Box>
                                <FormField name='name' htmlFor='name-input-id' label='Nombre'>
                                    <TextInput id='name-input-id' name='name' style={{ color: '#ffffff', padding: '0', fontSize: '14px', fontWeight: '600' }} />
                                </FormField>

                                <FormField name='lastname' htmlFor='lastname-input-id' label='Apellido(s)'>
                                    <TextInput id='lastname-input-id' name='lastname' style={{ color: '#ffffff', padding: '0', fontSize: '14px', fontWeight: '600' }} />
                                </FormField>

                                <FormField name='email' htmlFor='email-input-id' label='Email'>
                                    <TextInput id='email-input-id' name='email' style={{ color: '#ffffff', padding: '0', fontSize: '14px', fontWeight: '600' }} />
                                </FormField>

                                <FormField name='phonenumber' htmlFor='phone-input-id' label='Teléfono'>
                                    <TextInput id='phone-input-id' name='phonenumber' style={{ color: '#ffffff', padding: '0', fontSize: '14px', fontWeight: '600' }} />
                                </FormField>
                            </Box>
                            <Box justify='center' direction="row-responsive" gap="medium" pad='small' >
                                <Button type="submit" color="light-1" size='small' style={{ backgroundColor: '#ffffff', color: '#5587E6' }} label='Contactar' />
                                <Button type="reset" color="light-1" size='small' style={{ backgroundColor: '#5587E6', color: '#ffffff' }} label='Borrar' />
                            </Box>
                        </Form>
                    </Box>
                    <Box flex wrap overflow='auto' background={{ image: 'url(https://i.ibb.co/Kzb1DJn/image-header.jpg)', size: 'cover', position: 'center' }} />
                </Box>
            </Box>
        </Grommet >
    )
}

export default HomeBanner
