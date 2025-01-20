export const DateFormater = (param) => {
  const paramDate = new Date(param).toLocaleDateString();
  const fullDateArr = paramDate.split("/");
  const fullDate = `${fullDateArr[2]}-${
    fullDateArr[0].length == 1 ? `0${fullDateArr[0]}` : fullDateArr[0]
  }-${fullDateArr[1].length == 1 ? `0${fullDateArr[1]}` : fullDateArr[1]}`;

  console.log(`Date = ${fullDate}`);
  return fullDate;
};
