import { Heading, Center, Flex } from '@chakra-ui/react';

function EndScreen({ score, images }) {
	return (
		<Center width="100vw" height="100vh" bg="yellow.200">
			<Flex direction="column" textAlign="center">
				<Heading size="2xl">You finished the game!</Heading>
				<Heading>
					With a score of {score}/{images.length}
				</Heading>
			</Flex>
		</Center>
	);
}

export default EndScreen;
