import React, { useEffect } from 'react'
import {
    FormControl,
    Box,
    Button,
    Spinner,
    Input,
    Textarea
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form';


export default function TweetForm({ onFormSubmit = () => { }, isLoading, actionAfterSubmit = ()=>{}, titleSubmit = 'Publicar Comentario', isSuccess }) {

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = handleSubmit((data) => {
        onFormSubmit(data)
    })


    useEffect(() => {
        if (isSuccess) {
            reset()
            actionAfterSubmit()
        }
    }, [isSuccess])

    return (
        <>
            <Box as='form' display='flex' flexDirection='column' gridGap='2' onSubmit={onSubmit} padding={4} background='secondary' borderRadius='.8rem' marginY={5} alignItems='flex-end'>

                <FormControl id="title" isRequired>
                    <Input variant='flushed' size='sm' placeholder='Titulo' {...register("title")} id="title" name="title" />
                </FormControl>
                <FormControl id="content" isRequired>

                    <Textarea variant='flushed' placeholder="Contenido" {...register("content")} id="content" name="content" />
                </FormControl>
                <FormControl id="email" isRequired >
                    <Input variant='flushed' type='email' size='sm' placeholder='Correo electronico' {...register("email")} id="email" name="email" />
                </FormControl>
                <Button variant='primary' size='sm' width='200px' type='submit' marginY={4} >
                    {isLoading ? <Spinner size="xs" /> : titleSubmit}
                </Button>
            </Box>
        </>
    )
}
