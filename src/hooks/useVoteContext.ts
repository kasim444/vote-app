import { useContext } from "react";
import { VoteContext } from "context/voteContext";

export const useVoteContext = () => {
  const context = useContext(VoteContext);

  if (context === undefined) {
    throw new Error("useVoteContext must be used within VoteContext.Provider");
  }

  return context;
};
