"use client";

import { FC } from "react";
import { useCountDown } from "../model";

export const CountTimer: FC = () => {
  const { days, hours, minutes, seconds } = useCountDown();

  return (
    <div className="w-full mt-1.5">
      <div className="mx-auto w-fit">
        <h1>Когда? Когда? Когда?</h1>
        <div>
          <p>Дней этак через... {days}</p>
        </div>
        <p>А секунд?</p>
        <p>Что-то около {seconds} секунд</p>
      </div>
    </div>
  );
};
