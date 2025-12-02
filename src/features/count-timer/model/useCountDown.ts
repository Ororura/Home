import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../lib";

const TARGET_DATE = new Date("2025-06-27T00:00:00");

const useCountDown = () => {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(TARGET_DATE)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(TARGET_DATE));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
};

export { useCountDown };
