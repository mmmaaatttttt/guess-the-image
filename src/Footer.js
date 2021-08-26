import {
  Heading,
  Input,
  Button,
  Text,
  SimpleGrid,
  Box
} from "@chakra-ui/react";

function Footer({
  leftText,
  btnText,
  rightText,
  title,
  handleClick,
  handleGuess,
  guess,
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
    <Box py={5} width="100%" bg="gray.700" color="white">
      <SimpleGrid columns={[1, null, 4]} alignItems="center" textAlign="center">
        <Heading size="lg">{leftText}</Heading>
        <form onSubmit={handleSubmit}>
          <Input
            style={{
              marginTop: "5px",
              backgroundColor: "#319795",
              border: "none",
              color: "#fff"
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
        </form>
        <Button
          style={{ justifySelf: "center", marginTop: "5px" }}
          width="90%"
          onClick={handleClick}
          colorScheme="teal"
        >
          {btnText}
        </Button>
        <Text>{rightText}</Text>
      </SimpleGrid>
    </Box>
  );
}

export default Footer;
