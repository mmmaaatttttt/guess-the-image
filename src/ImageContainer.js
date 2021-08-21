import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Image from './Image';
import ImageBlocker from './ImageBlocker';
import Footer from './Footer';

function ImageContainer({
	src,
	title,
	nextImage,
	label,
	bottomText,
	guess,
	setGuess,
	score,
	handleGuess,
}) {
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
		left: 0,
	});
	const [ended, setEnded] = useState(false);
	const reveal = () => setEnded(true);

	const handleDimensionsChange = ({ width, height, left }) => {
		setDimensions({ width, height, left });
	};

	const handleNext = () => {
		setEnded(false);
		nextImage();
	};

	let leftText = `Guess the ${label}!`;
	let btnText = 'Reveal Answer';
	let handleClick = reveal;

	if (ended) {
		leftText = title;
		btnText = 'Select Next Image';
		handleClick = handleNext;
	}

	return (
		<Flex direction="column" position="relative" minH="100vh" bg="gray.200">
			<Flex flex={1} alignItems="center">
				{!ended && (
					<ImageBlocker
						{...dimensions}
						reveal={reveal}
						score={score}
						nextImage={nextImage}
					/>
				)}
				<h1>Your score is {score}</h1>
				<Image
					src={src}
					alt={title}
					handleDimensionsChange={handleDimensionsChange}
				/>
			</Flex>
			<Footer
				leftText={leftText}
				btnText={btnText}
				handleGuess={handleGuess}
				title={title}
				guess={guess}
				setGuess={setGuess}
				handleClick={handleClick}
				rightText={bottomText}
			/>
		</Flex>
	);
}

export default ImageContainer;
