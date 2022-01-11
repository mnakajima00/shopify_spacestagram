import { useState, useEffect } from 'react';

import { Box, Center, Spinner, VStack, Text } from '@chakra-ui/react';

import BackgroundImage from './assets/images/space-bg-1.jpg';

import Topbar from './components/Topbar';
import ImageSearch from './components/ImageSearch';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import { getImages } from './services';

const App = () => {

  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date(new Date().setDate(endDate.getDate() - 30)));

  const [imageData, setImageData] = useState();

  useEffect(async() => {
    const fetchData = await getImages(startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'));
    setImageData(fetchData.data);
  },[]);


  const onSearchClick = (e) => {
    e.preventDefault();
    setImageData(null);

    getImages(startDate.toLocaleDateString('en-CA'), endDate.toLocaleDateString('en-CA'))
    .then((res) => {
      setImageData(res.data);
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
        <ImageSearch startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} onSearchClick={onSearchClick}/>
      </Box>
      {/* Gallery */}
      {imageData ? (
        <Box w="90%" m="auto" p={8}>
            <Gallery imageData={imageData}/>
        </Box>
      ):(
        <Center p={32}>
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