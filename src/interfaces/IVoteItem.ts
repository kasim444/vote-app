export interface IVoteItem {
  id: string;
  title: string;
  link: string;
  votedCount: number;
  updatedAt: string;
}

export type AddVoteFormValueTypes = Pick<IVoteItem, "title" | "link">;
