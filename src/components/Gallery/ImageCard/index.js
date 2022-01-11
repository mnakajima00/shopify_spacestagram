import { useState } from 'react';
import { Box, Image, Heading, Text, Stack, Icon, Button, AspectRatio } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ImageCard = ({ imageData }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [like, setLike] = useState(localStorage.getItem(imageData.url) ? true : false);

    const onClickLike = (imageDate, imageURL) => {
        if(!localStorage.getItem(imageURL)) {
            localStorage.setItem(imageURL, imageURL);
            setLike(true);
        } else {
            localStorage.removeItem(imageURL);
            setLike(false);
        }
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' position="relative">
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
            <Image src={imageData.media_type == "image" ? imageData.url : imageData.thumbnail_url} h="250px" m="auto" objectFit="cover" onClick={onOpen} cursor="pointer" />
            
            <Stack p={4} position="relative" mb={10}>
                <Heading as="h1" size="sm">{imageData.title}</Heading>
                <Text fontSize="sm">{new Date(imageData.date).toLocaleDateString('en-us', { year:"numeric", month:"short", day: "numeric"})}</Text>
                <Text fontSize="sm" h="100px" overflowY="scroll">{imageData.explanation}</Text>
            </Stack>
            <Box position="absolute" bottom="0px" p={4}>
                <Icon w={6} h={6} as={like ? AiFillHeart : AiOutlineHeart} className="like-button" cursor="pointer" _hover={{ transition: "all .2s ease-in-out", transform: "scale(1.2)" }} onClick={() => onClickLike( new Date(imageData.date).toLocaleDateString('en-CA'), imageData.url)}/>
            </Box>
        </Box>
    );
}

export default ImageCard;