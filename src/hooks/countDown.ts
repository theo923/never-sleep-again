import { useEffect, useState } from "react";

const toSeconds = 1000;
const toMins = 1000 * 60;
const toHours = 1000 * 60 * 60;

const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const minutes = Math.floor((countDown % toHours) / toMins);
  const seconds = Math.floor((countDown % toMins) / toSeconds);
  return [minutes, seconds];
};

export { useCountdown };
