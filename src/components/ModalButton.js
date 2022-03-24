import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function ModalButton({ children, titleModal, buttontitle }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

   
    return (
        <>
            <Button onClick={onOpen} variant='primary' size={'sm'}>{buttontitle}</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{titleModal}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            children
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
