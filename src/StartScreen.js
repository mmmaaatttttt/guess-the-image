import { Heading, Button, Flex, Select, Text } from "@chakra-ui/react";

function StartScreen({ handleChange, handleStart, options }) {
  return (
    <Flex
      direction="column"
      width="100vw"
      height="100vh"
      justify="center"
      alignItems="center"
      bg="gray.200"
    >
      <Heading size="4xl" p={3}>
        <Text>Guess the</Text>
        <Select variant="flushed" bg="teal" onChange={handleChange}>
          {options.map((label, idx) => (
            <option key={label} value={idx}>
              {label}!
            </option>
          ))}
        </Select>
      </Heading>
      <Button size="lg" colorScheme="purple" onClick={handleStart}>
        Start Game
      </Button>
    </Flex>
  );
}

export default StartScreen;
