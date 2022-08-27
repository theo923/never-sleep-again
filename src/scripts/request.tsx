import axios from "axios";
import { useEffect, useState } from "react";
import { ERROR_MESSAGE } from "src/constants/TerminalUIConstants";
import { getCurrentTime } from "src/functions/getCurrentTime";
import { countDownTimer, randomTimer } from "src/functions/randomTimer";

export const request = (url: string) => {
  const [working, setWorking] = useState<boolean>(false);
  const [log, setLogging] = useState<string[]>([]);
  const [timer, setTimer] = useState<number>(0);

  const myLoop = async () => {
    if (working) {
      running(url);
      const randomTime = randomTimer();
      setTimer(randomTime);
      await countDownTimer(randomTime);
      myLoop();
    }
  };

  useEffect(() => {
    if (working) {
      myLoop();
    }
  }, [working]);

  const running = async (link: string) => {
    await axios
      .get(link)
      .then((res) => {
        setLogging((prev) => [
          ...prev,
          `${getCurrentTime()} status ${res.request.status}: ${
            res.request.responseURL
          }\n`,
        ]);
        return res;
      })
      .catch((error) => {
        setLogging((prev) => [
          ...prev,
          `${getCurrentTime()} status ${error.code}: ${error.message}\n` +
            ERROR_MESSAGE,
        ]);
        setWorking(false);
        return error;
      });
  };

  return { working, setWorking, log, timer };
};
