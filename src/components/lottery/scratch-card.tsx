import React from "react";
import ScratchCard from "react-scratchcard-v2";

interface IScratchCardProps {
  card: (0 | 1 | 10 | 100 | 1000)[];
}

export const Card = React.forwardRef(({ card }: IScratchCardProps, ref) => {
  return <div className="card"></div>;
});
