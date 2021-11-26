import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { GrAdd } from "react-icons/gr";

const SubmitLinkButton = () => {
  return (
    <ChakraLink as={RouterLink} to="/add" variant="submitLinkButton">
      <GrAdd />{" "}
      <Text as="span" ml="5">
        SUBMIT A LINK
      </Text>
    </ChakraLink>
  );
};

export default SubmitLinkButton;
