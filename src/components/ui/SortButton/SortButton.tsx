import { Box, Select } from "@chakra-ui/react";
import { SortByVoteTypes } from "interfaces";
import { useVoteContext } from "hooks";

const SortButton = () => {
  const { reOrderByDate, sortByVote } = useVoteContext();

  const onChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortVal = event.target.value;
    reOrderByDate(sortVal as SortByVoteTypes);
  };

  return (
    <Box maxWidth="250px">
      <Select placeholder="Order by" onChange={onChangeSort} value={sortByVote}>
        <option value="most">Most Voted (Z - A)</option>
        <option value="less">Less Voted (A - Z)</option>
      </Select>
    </Box>
  );
};

export default SortButton;
