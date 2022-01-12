/* React Components */
import { useState, useEffect } from 'react';

/* Chakra UI Components */
import { Box, Center, Spinner, VStack, Text } from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'

/* Space background image */
import BackgroundImage from './assets/images/space-bg.jpg';

/* Components */
import Topbar from './components/Topbar';
import ImageSearch from './components/ImageSearch';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

/* API Call */
import { getImages } from './services';

const App = () => {

  /* Alert for API error */
  const [hasError, setHasError] = useState(false);

  /* End and Start dates */
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date(new Date().setDate(endDate.getDate() - 30)));

  /* API Response is stored here */
  const [imageData, setImageData] = useState();

  /* If API is loading */
  const [isLoading, setIsLoading] = useState(true);

  /* Make API call as soon as component mounts and only once */
  useEffect(() => {
    /* Gets the images from default dates */
    getImages(startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'))
    .then((res) => {
      setImageData(res.data);
    }).finally(() => {
      setIsLoading(false);
    }).catch(() => {
      setHasError(true);
    });
  },[]);

  /* Makes API call to get images from range of dates */
  const onSearchClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    getImages(startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'))
    .then((res) => {
      setImageData(res.data);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <Box>
      <Box
        backgroundImage={BackgroundImage}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgSize="cover"
        h={["400px", "450px"]}
        w="100%"
      >
        {/* Topbar */}
        <Topbar />
        {/* Image Search */}
        <ImageSearch startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} onSearchClick={onSearchClick} isLoading={isLoading}/>
      </Box>
      {hasError && (
        <Alert status='error' w={["80%", "60%"]} m="auto" mt={3}>
          <AlertIcon />
          <AlertTitle mr={2}>API Error!</AlertTitle>
          <AlertDescription>Please click <Link href="https://youtu.be/3eBSqeKrHac" isExternal color="teal.500">here</Link> to see a Youtube demo of this application or head over to <Link href="https://github.com/mnakajima00/shopify_spacestagram" isExternal color="teal.500">Github</Link>.</AlertDescription>
        </Alert>
      )}
      {/* Gallery */}
      {!isLoading && imageData ? (
        <Box w="90%" m="auto" p={8}>
            <Gallery imageData={imageData}/>
        </Box>
      ):(
        <Center p={32}>
          {/* Show spinner while loading images */}
          <VStack>
            <Spinner size="xl"/>
            <Text>Loading images...</Text>
          </VStack>
        </Center>
      )}
      {/* Footer */}
      <Footer />
    </Box>
  )
}

export default App;