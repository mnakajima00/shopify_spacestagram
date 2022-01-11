import { Box, Heading } from '@chakra-ui/react';

const Topbar = () => {
    return (
        <Box p={3} bg="transparent">
            <Heading as="h1" size="lg" color="white">Spacetagram.</Heading>
        </Box>
    );
}

export default Topbar;