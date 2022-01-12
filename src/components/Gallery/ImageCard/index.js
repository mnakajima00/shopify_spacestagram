/* React components */
import { useState } from 'react';
/* Chakra UI components */
import { Box, Image, Heading, Text, Stack, Icon, AspectRatio, Flex, Spacer, useToast, useClipboard } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'

/* React Icons */
import { AiOutlineHeart, AiFillHeart, AiOutlineLink } from 'react-icons/ai';

const ImageCard = ({ imageData }) => {
    /* Toast and Clipboard for copying image URL */
    const toast = useToast();
    const { hasCopied, onCopy } = useClipboard(imageData.url);

    /* For displaying Modal */
    const { isOpen, onOpen, onClose } = useDisclosure();

    /* State of like button */
    const [like, setLike] = useState(localStorage.getItem(imageData.url) ? true : false);

    /**
     * When user likes a post, it saves the url of the post in localStorage
     * so that we can identify if the user has liked the post even on page refresh.
     */
    const onClickLike = (imageURL) => {
        /* Store to localStorage if doesn't exist already */
        if(!localStorage.getItem(imageURL)) {
            localStorage.setItem(imageURL, imageURL);
            setLike(true);
        } else {
            /* If exists already in localStorage, then remove */
            localStorage.removeItem(imageURL);
            setLike(false);
        }
    }

    return (
        <>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' position="relative">
                {/* Modal for displaying images with a larger view */}
                <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton color="#000" bgColor="#fff" zIndex={10} _focus={{ boxShadow: "none"}} _active={{ bg: '#fff', transform: 'none', borderColor: 'none' }}_hover={{ bg: '#fff' }}/>
                        <ModalBody p={0}>
                            {imageData.media_type == "image" ? (
                                <Image src={imageData.url} objectFit="cover" m="auto" onClick={onOpen}/>
                            ):(
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <iframe title={imageData.title} src={imageData.url} />
                                </AspectRatio>
                            )}
                            
                        </ModalBody>
                    </ModalContent>
                </Modal>

                {/* Display image */}
                <Image src={imageData.media_type == "image" ? imageData.url : imageData.thumbnail_url} h="250px" m="auto" objectFit="cover" onClick={onOpen} cursor="pointer" />
                
                {/* Display Title, Date and Explanation */}
                <Stack p={4} position="relative" mb={10}>
                    <Heading as="h1" size="sm">{imageData.title}</Heading>
                    <Text fontSize="sm">{new Date(imageData.date).toLocaleDateString('en-us', { year:"numeric", month:"short", day: "numeric"})}</Text>
                    <Text fontSize="sm" h="100px" overflowY="scroll">{imageData.explanation}</Text>
                </Stack>

                {/* Like button and Shareable link */}
                <Box position="absolute" bottom="0px" p={4} w="100%">
                    <Flex w="100%">
                        <Icon w={6} h={6} as={like ? AiFillHeart : AiOutlineHeart} className="like-button" cursor="pointer" _hover={{ transition: "all .2s ease-in-out", transform: "scale(1.2)" }} onClick={() => onClickLike(imageData.url)}/>
                        <Spacer />
                        <Icon w={6} h={6} as={AiOutlineLink} cursor="pointer" _hover={{ transition: "all .2s ease-in-out", transform: "scale(1.2)" }} onClick={() => {
                            onCopy();
                            return toast({
                                title: "Copied to clipboard!",
                                status: "success",
                                isClosable: true
                            }) 
                        }}/>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}

export default ImageCard;