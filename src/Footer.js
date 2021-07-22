import { Heading, Button, Text, SimpleGrid } from "@chakra-ui/react";

function Footer({ leftText, btnText, rightText, handleClick }) {
  return (
    <SimpleGrid columns={[1, null, 3]} alignItems="center">
      <Heading size="lg">{leftText}</Heading>
      <Button onClick={handleClick} colorScheme="teal">
        {btnText}
      </Button>
      <Text>{rightText}</Text>
    </SimpleGrid>
  );
}

export default Footer;
