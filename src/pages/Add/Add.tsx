import { Flex } from "@chakra-ui/react";
import { ReturnListLink } from "components/ui";
import { AddVoteForm } from "components/forms";

const Add = () => {
  return (
    <Flex as="section" flexDirection="column" alignItems="flex-start" py="5">
      <ReturnListLink />
      <AddVoteForm />
    </Flex>
  );
};

export default Add;
