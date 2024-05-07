/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import type ScratchCard from "react-scratchcard-v2";
interface IScratchAreaProps {
  value: 0 | 1 | 10 | 100 | 1000;
}

export const ScratchArea = React.forwardRef<ScratchCard, IScratchAreaProps>(
  ({ value }: IScratchAreaProps, ref) => {
    return (
      <div className="scratcharea-container">

      </div>
    );
  },
);
