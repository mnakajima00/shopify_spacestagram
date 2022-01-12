/* Chakra UI Components */
import { SimpleGrid } from '@chakra-ui/react';

/* Components */
import ImageCard from './ImageCard';

const Gallery = ({ imageData }) => {
    /**
     * imageData is reversed before mapping due to the fact that
     * the API returns the data from oldest to newest. By reversing
     * it, the array now contains images from most recent to oldest.
     */
    return (
        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={6} m="auto">
            {[...imageData].reverse().map((item, idx) => (
                <ImageCard key={idx} imageData={item}/>
            ))}
        </SimpleGrid>
    );
}

export default Gallery;