export const removeCopyRightText = (lyrics) => {
  if (!lyrics) return "";
  let resultantLyrics = lyrics ?? "";
  const indexOfAstrics = resultantLyrics.indexOf("*******");
  return resultantLyrics.substring(0, indexOfAstrics);
};

export const debounce = (callback, delay = 300) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
