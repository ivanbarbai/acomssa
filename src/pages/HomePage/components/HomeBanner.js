import React, { useState } from 'react'
import { Grommet, Box, Heading, Text, Anchor, Form, grommet, FormField, TextInput, Button } from 'grommet'
import { FormNextLink } from 'grommet-icons'

import { deepMerge } from 'grommet/utils';

const customAnchor = deepMerge(grommet, {
    anchor: {
        textDecoration: 'none',
        fontWeight: 700,
        hover: {
            textDecoration: 'none',
        },
        color:'white'
    },
    heading: {
        color: '#ffffff',
    },
    formField: {
        label: {

            size: 'small',
            weight: 400,
            margin: '0px'
        },
        input: {
            content: {

            }
        },

        border: {
            color: '#5587E6',
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
            <Box flex overflow='auto' background="#4066AD" pad="large" direction='row-responsive' gap='small' >
                <Box flex overflow='auto' wrap pad="small" justify='between' alignContent='around'>
                    <Box wrap flex>
                        <Heading size="xlarge" level="2" margin='none' >Te ayudamos con tu contabilidad</Heading>
                        <Heading level="4" >Realizamos una alta gama de servicios especializados en la asesoría comercial contable, financiera y estructura organizacional.</Heading>
                    </Box>
                    <Box pad='small' style={{ maxWidth: '360px' }} round='small' background="status-ok" >
                        <Anchor href="/servicios" label='Conoce nuestros Servicios' icon={<FormNextLink color='light-1' size="medium" />} />
                    </Box>

                </Box>

                <Box flex wrap overflow='auto' round="medium" direction="row-responsive" >
                    <Box background="light-1" pad="large" overflow='auto'>
                        <Form
                            value={value}
                            onChange={nextValue => setValue(nextValue)}
                            onReset={() => setValue({})}
                            onSubmit={({ value }) => { }}
                        >
                            <Box flex>
                                <Text margin='none' level="4" style={{ marginBottom: '1em' }} >Contactanos</Text>
                            </Box>
                            <Box>
                                <FormField name='name' htmlFor='name-input-id' label='Nombre'>
                                    <TextInput id='name-input-id' name='name' style={{ padding: '0', fontSize: '14px', fontWeight: '600' }} />
                                </FormField>

                                <FormField name='lastname' htmlFor='lastname-input-id' label='Apellido(s)'>
                                    <TextInput id='lastname-input-id' name='lastname' style={{ padding: '0', fontSize: '14px', fontWeight: '600' }} />
                                </FormField>

                                <FormField name='email' htmlFor='email-input-id' label='Email'>
                                    <TextInput id='email-input-id' name='email' style={{ padding: '0', fontSize: '14px', fontWeight: '600' }} />
                                </FormField>

                                <FormField name='phonenumber' htmlFor='phone-input-id' label='Teléfono'>
                                    <TextInput id='phone-input-id' name='phonenumber' style={{ padding: '0', fontSize: '14px', fontWeight: '600' }} />
                                </FormField>
                            </Box>
                            <Box justify='center' direction="row-responsive" gap="medium" pad='small' >
                                <Button type="submit" color="#5587E6" size='small' style={{ backgroundColor: '#5587E6', color: '#ffffff' }} label='Contactar' />
                                <Button type="reset" color="#5587E6" size='small' style={{ backgroundColor: '#ffffff', color: '##5587E6' }} label='Borrar' />
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
