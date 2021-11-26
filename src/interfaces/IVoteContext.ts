import { AddVoteFormValueTypes, IVoteItem, SortByVoteTypes } from "./";

export interface IVoteContext {
  votes: IVoteItem[];
  saveVote: (todo: AddVoteFormValueTypes) => void;
  upVote: (id: string) => void;
  downVote: (id: string) => void;
  setVotes: (todos: IVoteItem[]) => void;
  removeVote: (id: string) => void;
  sortByVote: SortByVoteTypes;
  reOrderByDate: (sortVal: SortByVoteTypes) => void;
}
