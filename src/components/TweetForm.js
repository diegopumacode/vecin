import React from 'react'
import {
    FormControl,
    FormLabel,
    Box,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputField,
    NumberInput,
    Button,
    Spinner,
    Input,
    Textarea
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form';


/**
 * Formulario de usuarios
 * @param {defaultValues} 
 * @param {onFormSubmit} 
 * @param {isLoading} 
 * @param {actionAfterSubmit}
 * @param {titleSubmit}
 * @returns 
 */
export default function TweetForm({ defaultValues, onFormSubmit, isLoading, actionAfterSubmit, titleSubmit = 'Comentario' }) {

    const { register, handleSubmit } = useForm({ defaultValues })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        onFormSubmit(data)
        actionAfterSubmit()
    })

    return (
        <>

            <Box as='form' display='flex' flexDirection='column' gridGap='2' onSubmit={onSubmit} padding={4} background='secondary' borderRadius='.8rem' marginY={5} alignItems='flex-end'>

                <FormControl id="email" isRequired >
                    <Input variant='flushed' type='email'  size='sm' placeholder='Correo electronico' {...register("email")} id="email" name="email"/>
                </FormControl>
                <FormControl id="lastName" isRequired>
                    
                    <Input variant='flushed' size='sm' placeholder='Titulo' {...register("lastName")} id="lastName" name="lastName" />
                </FormControl>
                <FormControl id="content" isRequired>
                    
                    <Textarea variant='flushed' placeholder="What's happening ?" {...register("content")} id="content" name="content" />
                </FormControl>
                
                <Button variant='primary' size='sm' width='200px' type='submit' marginY={4} >
                    {isLoading ? <Spinner size="xs" /> : titleSubmit}
                </Button>
            </Box>

        </>
    )
}
