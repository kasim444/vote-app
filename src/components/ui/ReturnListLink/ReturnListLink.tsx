import { Link as ChakraLink, Text, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const ReturnListLink = () => {
  return (
    <ChakraLink
      as={RouterLink}
      to="/"
      variant="unstyled"
      _hover={{
        "& > svg": {
          transform: "translateX(-5px)",
        },
      }}
    >
      <Icon
        as={IoIosArrowRoundBack}
        fontSize="3xl"
        transition="transform 0.3s ease-in-out"
      />{" "}
      <Text as="span" ml="1" fontWeight="semibold">
        Return to List
      </Text>
    </ChakraLink>
  );
};

export default ReturnListLink;
