import { VStack, Divider } from "@chakra-ui/react";
import { SubmitLinkButton, SortButton } from "components/ui";
import { Votes } from "components/common";
import Pagination from "rc-pagination";
import { usePagination, useVoteContext } from "hooks";

const Home = () => {
  const { votes, sortByVote } = useVoteContext();

  const { paginatedData, handlePagination, currentPage } = usePagination(
    votes,
    5,
    500,
    sortByVote
  );

  return (
    <VStack
      as="section"
      flexDirection="column"
      alignItems="center"
      py="5"
      spacing="4"
    >
      <SubmitLinkButton />
      <Divider />
      <SortButton />
      <Votes data={paginatedData} />
      <Pagination
        onChange={handlePagination}
        current={currentPage}
        pageSize={5}
        total={votes.length}
      />
    </VStack>
  );
};

export default Home;
