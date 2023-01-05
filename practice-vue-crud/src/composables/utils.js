//이메일 마스킹
const hideString = (str) => {
  const len = str.length - 4;
  const index = str.indexOf("@");
  return (
    str.substring(0, 4) +
    "*".repeat(index - 4) +
    str.substring(index, str.length)
  );
};
export default hideString;
