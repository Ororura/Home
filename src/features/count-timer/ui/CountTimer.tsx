"use client";
import { FC } from "react";
import { useCountDown } from "../model";

const CountTimer: FC = () => {
  const { days, hours, minutes, seconds } = useCountDown();
  return (
    <div>
      <p>Дней до дома: {days}</p>
    </div>
  );
};

export { CountTimer };
