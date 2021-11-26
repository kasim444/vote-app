import { IVoteItem } from "interfaces";

export const sortVotesByDateAndCount = (votes: IVoteItem[]) => {
  return votes.sort((x, y) => {
    if (x.votedCount === y.votedCount) {
      return parseInt(y.updatedAt) - parseInt(x.updatedAt, 10);
    }

    return y.votedCount - x.votedCount;
  });
};
