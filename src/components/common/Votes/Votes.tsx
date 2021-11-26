import { EmptySource } from "../";
import { VoteCard } from "components/common";
import { Reorder } from "framer-motion";
import { IVoteItem } from "interfaces";
import { useReoderMotion } from "hooks";

interface IVotes {
  data: IVoteItem[];
}

const Votes = ({ data }: IVotes) => {
  const { indexs, setIndexs } = useReoderMotion(data.map((_d, i) => i));

  if (data.length === 0) {
    return <EmptySource />;
  }

  return (
    <Reorder.Group axis="y" values={indexs} onReorder={setIndexs}>
      {data.map((vote, i) => (
        <VoteCard key={vote.id} reorderMotionValue={i} {...vote} />
      ))}
    </Reorder.Group>
  );
};

export default Votes;
