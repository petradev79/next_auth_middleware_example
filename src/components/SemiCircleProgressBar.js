// 'use client'

import { SemiCircleProgress } from "react-semicircle-progressbar";

const SemiCircleProgressBar = ({value}) => {
  return (
    <div>
      <SemiCircleProgress
        percentage={value}
        size={{
          width: 200,
          height: 200,
        }}
        strokeWidth={10}
        strokeColor="green"
        hasBackground={true}
        bgStrokeColor="lightgray"
      />
    </div>
  );
};

export default SemiCircleProgressBar;