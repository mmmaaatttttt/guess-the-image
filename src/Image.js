import { memo, useRef } from 'react';
import { Image as ChakraImage } from '@chakra-ui/react';
import useSizeDetector from './hooks/useSizeDetector';

function Image({ src, alt, handleDimensionsChange }) {
	const imageRef = useRef(null);
	useSizeDetector(imageRef, handleDimensionsChange);

	return (
		<ChakraImage
			src={src}
			alt={alt}
			display="block"
			margin="0 auto"
			maxW="100%"
			maxH="75vh"
			ignoreFallback
			ref={imageRef}
		/>
	);
}

export default memo(Image);
