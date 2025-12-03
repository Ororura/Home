"use client";

import { FC } from "react";
import { useCountDown } from "../model";

export const CountTimer: FC = () => {
  const { days, hours, minutes, seconds } = useCountDown();

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl text-center">
        <h2 className="text-2xl font-semibold mb-6">Дней до дома</h2>

        <div className="grid grid-cols-4 gap-4 ">
          <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl">
            <span className="text-4xl font-bold">{days}</span>
            <span className="text-sm opacity-70">Дней</span>
          </div>

          <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl">
            <span className="text-4xl font-bold">{hours}</span>
            <span className="text-sm opacity-70">Часов</span>
          </div>

          <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl">
            <span className="text-4xl font-bold">{minutes}</span>
            <span className="text-sm opacity-70">Минут</span>
          </div>

          <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl">
            <span className="text-4xl font-bold">{seconds}</span>
            <span className="text-sm opacity-70">Секунд</span>
          </div>
        </div>
      </div>
    </div>
  );
};
