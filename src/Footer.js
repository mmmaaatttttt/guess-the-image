import {
	Heading,
	Input,
	Button,
	Text,
	SimpleGrid,
	Box,
} from '@chakra-ui/react';

import { Formik, useFormik } from 'formik';

function Footer({
	leftText,
	btnText,
	rightText,
	title,
	handleClick,
	handleGuess,
	guess,
	setGuess,
}) {
	const formik = useFormik({
		initialValues: {
			guess,
		},
		onSubmit: (values) => {
			handleGuess(values, title);
			setGuess('');
		},
	});
	const handleReset = () => setGuess('');
	return (
		<Box py={5} width="100%" bg="gray.700" color="white">
			<SimpleGrid columns={[1, null, 4]} alignItems="center" textAlign="center">
				<Heading size="lg">{leftText}</Heading>
				<Formik
					onReset={handleReset}
					initialValues={guess}
					onSubmit={handleGuess}
				>
					<form onSubmit={formik.handleSubmit}>
						<Input
							placeholder="Take a Guess!"
							onChange={formik.handleChange}
							id="guess"
							name="guess"
						/>
					</form>
				</Formik>
				<Button width="90%" onClick={handleClick} colorScheme="teal">
					{btnText}
				</Button>
				<Text>{rightText}</Text>
			</SimpleGrid>
		</Box>
	);
}

export default Footer;
