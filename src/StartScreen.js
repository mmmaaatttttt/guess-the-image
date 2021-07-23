import { Heading, Button, Flex } from "@chakra-ui/react";

function StartScreen({ handleClick }) {
  return (
    <Flex
      direction="column"
      width="100vw"
      height="100vh"
      justify="center"
      alignItems="center"
      bg="gray.200"
    >
      <Heading size="4xl" p={3}>Guess the Movie!</Heading>
      <Button size="lg" colorScheme="purple" onClick={handleClick}>
        Start Game
      </Button>
    </Flex>
  );
}

export default StartScreen;
