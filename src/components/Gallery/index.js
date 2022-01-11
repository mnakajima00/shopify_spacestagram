import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';

import { getMoreImages } from '../../services';

import ImageCard from './ImageCard';

const Gallery = ({ imageData }) => {
    const [images, setImages] = useState([...imageData].reverse());
    // const [hasMore, setHasMore] = useState(imageData.collection.items.length === 100);

    // const fetchMoreImages = async () => {
    //     const res = await getMoreImages(imageData.collection.links[0].href);

    //     if(res.data.collection.items.length > 0) {
    //         setImages(images.concat(res.data.collection.items));
    //     } else {
    //         console.log("here");
    //         setHasMore(false);
    //     }
    // }

    return (
        // <InfiniteScroll
        //     dataLength={images.length} //This is important field to render the next data
        //     next={fetchMoreImages}
        //     hasMore={hasMore}
        //     loader={<h4>Loading...</h4>}
        //     endMessage={
        //         <p style={{ textAlign: 'center' }}>
        //           <b>Yay! You have seen it all</b>
        //         </p>
        //       }
        //     >
        //         <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={6} m="auto">
        //             {images.map((item, idx) => (
        //                 <ImageCard key={idx} imageData={item}/>
        //             ))}
        //         </SimpleGrid>
        // </InfiniteScroll>
        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={6} m="auto">
            {images.map((item, idx) => (
                <ImageCard key={idx} imageData={item}/>
            ))}
        </SimpleGrid>
    );
}

export default Gallery;