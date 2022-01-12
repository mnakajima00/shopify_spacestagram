import { Box, Heading, Flex, Spacer, Icon } from '@chakra-ui/react';

/* React Icon */
import { AiFillGithub } from 'react-icons/ai';

const Topbar = () => {
    return (
        <Box p={3} bg="transparent">
            <Flex>
                <Heading as="h1" size="lg" color="white">Spacestagram.</Heading>
                <Spacer />
                <a href="https://github.com/mnakajima00/shopify_spacestagram" target="_blank">
                    <Icon as={AiFillGithub} w={8} h={8} color="#fff" cursor="pointer" _hover={{ transition: "all .2s ease-in-out", transform: "scale(1.2)" }}/>
                </a>
            </Flex>
            
        </Box>
    );
}

export default Topbar;