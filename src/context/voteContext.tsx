import { createContext, FC, useState } from "react";
import {
  IVoteItem,
  IVoteContext,
  AddVoteFormValueTypes,
  SortByVoteTypes,
} from "interfaces";
import { v4 as uuidv4 } from "uuid";
import {
  generateUnixTime,
  sortVotesByDateAndCount,
  generateDummyLinks,
} from "utils";
import useLocalStorageState from "use-local-storage-state";

const contextDefaultValues: IVoteContext = {
  votes: sortVotesByDateAndCount(generateDummyLinks()),
  saveVote: (todo: AddVoteFormValueTypes) => {},
  upVote: (id: string) => {},
  downVote: (id: string) => {},
  setVotes: (todos: IVoteItem[]) => {},
  removeVote: (id: string) => {},
  sortByVote: undefined,
  reOrderByDate: (sortVal: SortByVoteTypes) => {},
};

export const VoteContext = createContext<IVoteContext>(contextDefaultValues);

const VoteProvider: FC = ({ children }) => {
  const [votes, setVotes] = useLocalStorageState<IVoteItem[]>(
    "votes",
    contextDefaultValues.votes
  );

  const [sortByVote, setSortByVote] = useState<SortByVoteTypes>(undefined);

  const saveVote = ({ title, link }: AddVoteFormValueTypes) => {
    const preparedVoteItem: IVoteItem = {
      id: uuidv4(),
      title,
      link,
      votedCount: 0,
      updatedAt: generateUnixTime(),
    };
    setVotes(sortVotesByDateAndCount([preparedVoteItem, ...votes]));
  };

  const upVote = (id: string) => {
    setVotes((oldVotes) =>
      sortVotesByDateAndCount(
        oldVotes.map((vote: IVoteItem) =>
          vote.id === id
            ? {
                ...vote,
                votedCount: vote.votedCount + 1,
                updatedAt: generateUnixTime(),
              }
            : vote
        )
      )
    );
  };

  const downVote = (id: string) => {
    setVotes((oldVotes) =>
      sortVotesByDateAndCount(
        oldVotes.map((vote: IVoteItem) =>
          vote.id === id
            ? {
                ...vote,
                votedCount: vote.votedCount - 1,
                updatedAt: generateUnixTime(),
              }
            : vote
        )
      )
    );
  };

  const removeVote = (id: string) =>
    setVotes((oldVotes) =>
      sortVotesByDateAndCount(oldVotes.filter((vote) => vote.id !== id))
    );

  const reOrderByDate = (defaultValue: SortByVoteTypes = "most") => {
    setSortByVote(defaultValue);

    setVotes((oldVotes) => {
      const reOrderedVotes = sortVotesByDateAndCount(oldVotes);

      return defaultValue === "less"
        ? reOrderedVotes.reverse()
        : reOrderedVotes;
    });
  };

  return (
    <VoteContext.Provider
      value={{
        votes,
        saveVote,
        upVote,
        downVote,
        setVotes,
        removeVote,
        sortByVote,
        reOrderByDate,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};

export default VoteProvider;
