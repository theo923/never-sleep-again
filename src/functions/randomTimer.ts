export const randomTimer = (): number => {
  var min = 20,
    max = 25;
  const time = Math.floor(Math.random() * (max - min + 1) + min) * 60 * 60 * 60;
  return time;
};

export const countDownTimer = (ms: number) =>
  new Promise((res) => setTimeout(res, ms));
