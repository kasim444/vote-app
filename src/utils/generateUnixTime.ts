export const generateUnixTime = () => {
  return (+new Date() / 1000).toFixed(0);
};
