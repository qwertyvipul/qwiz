export const getTimeString = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeString = mins + ":" + (secs < 10 ? "0" : "") + secs;
  return timeString;
};
