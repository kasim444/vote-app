import {
  Box,
  Grid,
  Badge,
  VStack,
  Flex,
  Text,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { IVoteItem } from "interfaces";
import { VoteCountButton } from "components/ui";
import { BsTrash } from "react-icons/bs";
import { AlertDialog } from "components/common";
import { Reorder } from "framer-motion";
import { useVoteContext } from "hooks";

interface IVoteCard extends IVoteItem {
  reorderMotionValue?: number;
}

const VoteCard = ({
  id,
  title,
  link,
  votedCount,
  reorderMotionValue = 0,
}: IVoteCard) => {
  const { removeVote, upVote, downVote } = useVoteContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      as={Reorder.Item}
      value={reorderMotionValue}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: { duration: 0.5 },
      }}
      gridTemplateColumns={{
        base: "75px minmax(0, 1fr)",
        lg: "115px minmax(0, 1fr)",
      }}
      gridColumnGap="5"
      placeItems="flex-start"
      maxWidth="full"
      px="4"
      py="2"
      transition="background 0.3s ease-in-out"
      borderRadius="lg"
      role="group"
      _hover={{ background: "gray.200" }}
      position="relative"
    >
      <IconButton
        aria-label="Search database"
        icon={<BsTrash />}
        position="absolute"
        top="-10px"
        right="-10px"
        background="gray.100"
        opacity="0"
        transition="opacity 0.3s ease-in-out"
        _groupHover={{
          opacity: "1",
        }}
        onClick={onOpen}
      />
      <Badge variant="voteCount">
        <Text as="span" fontSize="4xl">
          {votedCount}
        </Text>
        <Text as="span">POINTS</Text>
      </Badge>
      <VStack
        flexDirection="column"
        alignItems="stretch"
        spacing="4"
        width="full"
      >
        <Box>
          <Text fontWeight="bold" fontSize="2xl" noOfLines={2}>
            {title}
          </Text>
          <Link
            href={link}
            target="_blank"
            color="gray.500"
            noOfLines={1}
            textAlign="left"
          >
            ({link})
          </Link>
        </Box>

        <Flex justifyContent="space-between">
          <VoteCountButton direction="up" onClick={() => upVote(id)}>
            Up Vote
          </VoteCountButton>
          <VoteCountButton direction="down" onClick={() => downVote(id)}>
            Down Vote
          </VoteCountButton>
        </Flex>
      </VStack>

      <AlertDialog
        id={id}
        title={title}
        isOpen={isOpen}
        onClose={onClose}
        onRemove={removeVote}
      />
    </Grid>
  );
};

export default VoteCard;
