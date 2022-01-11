import { Box, Heading, Center, Text, HStack, VStack, Input, InputGroup, InputLeftElement, Icon, Button, Flex, Spacer } from '@chakra-ui/react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AiOutlineSearch } from 'react-icons/ai';

const ImageSearch = ({ startDate, setStartDate, endDate, setEndDate, onSearchClick }) => {

    return (
        <Box p={16}>
            {/* Heading */}
            <VStack>
                <Center>
                    <Heading as="h1" size="xl" color="#fff">Explore the universe.</Heading>
                </Center>
                <Center>
                    <Heading as="h3" size="md" color="#fff">Start your journey here.</Heading>
                </Center>
            </VStack>
            {/* Searchbar */}
            <Box mt={10}>
                <Flex w="70%" m="auto">
                    <Spacer />
                    <Center mr={2}>
                        <Text color="#fff" fontWeight="bold">From: </Text>
                    </Center>
                    <Box className="date-input">
                        <DatePicker
                            selected={startDate}
                            dateFormat="yyyy-MM-dd"
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </Box>
                    <Center ml={4} mr={2}>
                        <Text color="#fff" fontWeight="bold">To: </Text>
                    </Center>
                    <Box className="date-input">
                        <DatePicker
                            selected={endDate}
                            dateFormat="yyyy-MM-dd"
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            maxDate={new Date()}
                        />
                    </Box>
                    <Spacer />
                </Flex>
            </Box>
            {/* Search Button */}
            <Box mt={8}>
                <Center>
                    <Button leftIcon={<AiOutlineSearch />} onClick={(e) => onSearchClick(e)}>Search</Button>
                </Center>
            </Box>
        </Box>
    );
}

export default ImageSearch;