import { Heading, Button, Flex, Select } from "@chakra-ui/react";

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
      <Heading size="3xl" p={3}>
        Guess the...
      </Heading>
      <Select
        variant="filled"
        onChange={handleChange}
        _hover={{ background: "gray.300", cursor: "pointer" }}
        _focus={{ background: "gray.300" }}
        width="10em"
        mb={4}
      >
        {options.map((label, idx) => (
          <option key={label} value={idx}>
            {label}!
          </option>
        ))}
      </Select>
      <Button size="lg" colorScheme="purple" onClick={handleStart}>
        Start Game
      </Button>
    </Flex>
  );
}

export default StartScreen;
