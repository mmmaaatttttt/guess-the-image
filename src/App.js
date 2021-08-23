import { useState, useMemo } from 'react';
import imageData from './data';
import { shuffle } from './util/random';
import ImageContainer from './ImageContainer';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';

function App() {
	const [ended, setEnded] = useState(false);
	const [isCorrect, setIsCorrrect] = useState(false);
	const [selectedIdx, setSelectedIdx] = useState(0);
	const [score, setScore] = useState(0);
	const [guess, setGuess] = useState('');
	const [started, setStarted] = useState(false);
	const [imageIdx, setImageIdx] = useState(0);
	const reveal = () => {
		setEnded(true);
		setGuess('');
	};
	const nextImage = () => setImageIdx((oldIdx) => oldIdx + 1);
	const handleChange = (e) => {
		setSelectedIdx(+e.target.value);
	};
	const handleGuess = (val, target) => {
		target = target.toLowerCase();
		val = val.toLowerCase();
		setGuess(val);
		console.log('VALLL', val);
		console.log('TARGET', target);
		if (val === target) {
			setScore((score) => (score += 1));
			setIsCorrrect(true);
			reveal();
		}
	};
	const handleStart = () => setStarted(true);
	const { images, label } = imageData[selectedIdx];
	const randomImages = useMemo(() => shuffle(images), [images]);
	const gameEnded = imageIdx === images.length;
	const bottomText = `Image ${imageIdx + 1} of ${images.length}`;

	if (!started)
		return (
			<StartScreen
				handleChange={handleChange}
				handleStart={handleStart}
				options={imageData.map((d) => d.label)}
			/>
		);
	if (gameEnded) return <EndScreen />;

	return (
		<ImageContainer
			{...randomImages[imageIdx]}
			bottomText={bottomText}
			label={label}
			reveal={reveal}
			ended={ended}
			isCorrect={isCorrect}
			setIsCorrrect={setIsCorrrect}
			setEnded={setEnded}
			guess={guess}
			setGuess={setGuess}
			score={score}
			handleGuess={handleGuess}
			nextImage={nextImage}
		/>
	);
}

export default App;
