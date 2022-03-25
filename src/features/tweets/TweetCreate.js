import React from 'react'
import TweetForm from '../../components/tweetForm'
import useCreateTweet from '../../hooks/useCreateTweet'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'

export default function TweetCreate() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { createTweet, isLoading, isSuccess, resetStatus } = useCreateTweet()

    const formSubmit = async (data) => {
        createTweet(data)
    }

    const actionAfterSubmit = () => {
        resetStatus()
        onClose()
    }


    return (
        <>

            <Button onClick={onOpen} variant='primary' size={'sm'}>Publicar Post</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear publicacion</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <TweetForm
                            onFormSubmit={formSubmit}
                            isLoading={isLoading}
                            isSuccess={isSuccess}
                            actionAfterSubmit={actionAfterSubmit}
                            titleSubmit='Publicar' />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
