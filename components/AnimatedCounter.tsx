import React from "react";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  end: number;
  formattingFn?: (value: number) => string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, formattingFn }) => {
  return (
    <CountUp
      duration={2.75}
      end={end}
      formattingFn={formattingFn ?? ((val) => val.toLocaleString())}
    />
  );
};

export default AnimatedCounter;
