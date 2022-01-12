import { Box, Center, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box p={24} bg="black">
            <Center>
                <Text color="#fff">Created by Maiku using ReactJS and NASA Open API.</Text>
            </Center>
        </Box>
    );
}

export default Footer;