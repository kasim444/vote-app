import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

interface IVoteCountButton extends ButtonProps {
  direction: "up" | "down";
}

const VoteCountButton = ({
  children,
  direction,
  ...rest
}: IVoteCountButton) => {
  return (
    <Button
      leftIcon={
        <Icon
          as={direction === "up" ? AiOutlineArrowUp : AiOutlineArrowDown}
          fontSize="xl"
          transition="transform 0.3s ease-in-out"
        />
      }
      variant="voteCount"
      _hover={{
        "& svg": {
          transform: `translateY(${direction === "up" ? "-3px" : "3px"})`,
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default VoteCountButton;
