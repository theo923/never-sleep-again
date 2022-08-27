export const getNewTimer = (timer: number) => {
  const d = new Date();
  d.setTime(d.getTime() + timer);
  return d;
};
