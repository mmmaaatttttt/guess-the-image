import { Heading, Button, Text, SimpleGrid, Box } from "@chakra-ui/react";

function Footer({ leftText, btnText, rightText, handleClick }) {
  return (
    <Box py={5} width="100%" bg="gray.700" color="white">
      <SimpleGrid columns={[1, null, 3]} alignItems="center" textAlign="center">
        <Heading size="lg">{leftText}</Heading>
        <Button onClick={handleClick} colorScheme="teal">
          {btnText}
        </Button>
        <Text>{rightText}</Text>
      </SimpleGrid>
    </Box>
  );
}

export default Footer;
