import { useState } from "react";

export const useReoderMotion = (defaultIndexs: number[]) => {
  const [indexs, setIndexs] = useState(defaultIndexs);

  return {
    indexs,
    setIndexs,
  };
};
