import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

function Footer({
  isCorrect,
  leftText,
  btnText,
  rightText,
  title,
  handleClick,
  handleGuess,
  ended,
  guess,
  wrongGuess,
  scoreText,
  setGuess
}) {
  function handleSubmit(evt) {
    evt.preventDefault();

    handleGuess(guess, title.toLowerCase());
  }
  function handleChange(evt) {
    evt.preventDefault();
    setGuess(evt.target.value);
  }
  return (
    <Box
      py={5}
      width="100%"
      bg={isCorrect ? "green.400" : wrongGuess > 1 ? "red.600" : "gray.700"}
      color="white"
    >
      <SimpleGrid columns={[1, null, 4]} alignItems="center" textAlign="center">
        <Heading color={isCorrect ? "#805ad5" : "white"} size="lg">
          {leftText}
        </Heading>
        <form onSubmit={handleSubmit}>
          {isCorrect ? (
            <Heading size="lg">Correct!</Heading>
          ) : ended ? (
            <Heading size="lg">Try again!</Heading>
          ) : (
            <Input
              style={{
                marginTop: "5px",
                backgroundColor: "#fff",
                border: "none",
                color: "#000"
              }}
              autoComplete="off"
              focusBorderColor="#fff"
              textAlign="center"
              size="md"
              width="90%"
              placeholder="Take a Guess!"
              onChange={handleChange}
              id="guess"
              name="guess"
              value={guess}
            />
          )}
        </form>
        <Button
          style={{ justifySelf: "center", marginTop: "5px" }}
          width="90%"
          onClick={handleClick}
          colorScheme={isCorrect ? "purple" : "teal"}
        >
          {btnText}
        </Button>
        {wrongGuess > 1 ? (
          <Flex direction="column">
            <Text>{rightText}</Text>
            <Text>{`Chances ${wrongGuess} of 3`}</Text>
          </Flex>
        ) : (
          <Flex direction="column">
            <Text>{rightText}</Text>
            <Text>{scoreText}</Text>
          </Flex>
        )}
      </SimpleGrid>
    </Box>
  );
}

export default Footer;
